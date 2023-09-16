import { Component, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions, Chart } from 'chart.js';
import {
  CompanyDto,
  ComparisonDto,
  MeterDto,
  PredictionDto,
} from 'src/models/data.model';
import { SparkleApiService } from 'src/services/sparkle-api.service';
import { OnInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
import { ZoomPluginOptions } from 'chartjs-plugin-zoom/types/options';
import { timeInterval, timeout } from 'rxjs';

type timeStampOption = {
  display: string;
  value: number;
};

const zoomOptions: ZoomPluginOptions = {
  zoom: {
    wheel: {
      enabled: true,
    },
    pinch: {
      enabled: true,
    },
    mode: 'x',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  public scrollableList: string[] = [];

  public chartData: ChartDataset[] = [];

  public chartColors = [
    {
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(255, 0, 0, 0.3)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 0, 0, 0.3)',
    },
  ];

  public chartLabels: string[] = [];

  public chartOptions: ChartOptions = {
    responsive: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time(Universal)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Usage(kWh)',
        },
      },
    },
    plugins: {
      zoom: zoomOptions,
    },
  };

  public chartLegend = true;

  public datePipe = new DatePipe('en-US');

  public decimalPipe = new DecimalPipe('en-US');

  chartDataPrediction: ChartDataset = {
    data: [],
    label: 'Prediction',
    backgroundColor: 'rgba(63, 81, 181, 0.3)',
    borderColor: 'rgba(63, 81, 181, 0.7)',
    pointBackgroundColor: 'rgba(63, 81, 181, 0.3)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(63, 81, 181, 0.3)',
    fill: 'origin',
    type: 'line',
  };

  chartDataComparison: ChartDataset = {
    data: [],
    label: 'Actual',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderColor: 'rgba(255, 0, 0, 0.7)',
    pointBackgroundColor: 'rgba(255, 0, 0, 0.3)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255, 0, 0, 0.3)',
    fill: 'none',
    type: 'line',
  };

  isLoading = false;

  logoUrl = '/assets/images/sparkle-logo.png';

  selectedMeterId: string | null = null;

  selectedTimeStamp: timeStampOption | null = null;

  selectedReggressorMethod: string | null = null;

  autocompleteOptions: MeterDto[] = [];

  selectOptions: timeStampOption[] = [
    { display: '24 Hours', value: 24 },
    { display: '48 Hours', value: 48 },
    { display: '168 Hours', value: 168 },
    { display: '720 Hours', value: 720 },
  ];

  selectedReggressorMethodOptions: string[] = ['Prediction', 'Comparison'];

  company: CompanyDto | null = null;

  constructor(
    private sparkleApiService: SparkleApiService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.sparkleApiService
      .getCompany({})
      .pipe(timeout(4000))
      .subscribe(
        (company) => {
          this.company = company;
          if (company) {
            this.sparkleApiService
              .getMeterList({
                companyId: company.id,
              })
              .subscribe(
                (meters) => {
                  this.autocompleteOptions = meters.items ?? [];
                },
                (error) => {
                  this.handleApiError(error);
                }
              );
          }
        },
        (error) => {
          if (this.drawer) {
            this.drawer.open();
          }
          this.handleApiError(error);
        }
      );
  }

  onButtonClick(event: Event) {
    this.isLoading = true;

    event.stopPropagation();

    if (this.selectedReggressorMethod === 'Prediction') {
      this.sparkleApiService
        .getPrediction({
          MeterId: this.selectedMeterId ?? '',
          Hours: this.selectedTimeStamp?.value ?? 0,
        })
        .subscribe(
          (prediction) => {
            this.setChartData(prediction);
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.handleApiError(error);
          }
        );
    }
    if (this.selectedReggressorMethod === 'Comparison') {
      this.sparkleApiService
        .getComparison({
          MeterId: this.selectedMeterId ?? '',
          Hours: this.selectedTimeStamp?.value ?? 0,
        })
        .subscribe(
          (comparison) => {
            this.setChartData(comparison);
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.handleApiError(error);
          }
        );
    }
    if (this.selectedReggressorMethod === null) {
      this.openSnackBar('Warning: Please select regressor method!');
      this.isLoading = false;
    }
  }

  onRecconnectClick() {
    if (this.drawer) {
      this.drawer.close();
    }
    this.ngOnInit();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  onMethodChange($event: any) {
    this.selectedReggressorMethod = $event?.source?.value;
    this.chartDataComparison.data = [];
    this.chartDataPrediction.data = [];

    if (this.selectedReggressorMethod === 'Prediction') {
      this.chartData = [this.chartDataPrediction];
    }
    if (this.selectedReggressorMethod === 'Comparison') {
      this.chartData = [this.chartDataComparison, this.chartDataPrediction];
    }
    this.chartData = [...this.chartData];
  }

  handleApiError(error: any) {
    let message = '';

    if (error.error && error.error instanceof Array) {
      const apiErrors = error.error as any[];
      message = apiErrors
        .map((apiError) => {
          return `${apiError.errorMessage}`;
        })
        .join('\n');
    } else if (error && error.message) {
      message = error.message;
    } else {
      message = 'unknown error';
    }

    this.openSnackBar(`apiError: ${message.toLowerCase()}`);
  }

  setChartData(chartData: PredictionDto | ComparisonDto | null) {
    if (!chartData) {
      return;
    }
    this.chartData[0].data = Object.values(chartData.prediction ?? {}).map(
      (value) => {
        return parseFloat(this.decimalPipe.transform(value, '1.4-4') ?? '0');
      }
    );
    if ('previous' in chartData) {
      const comparsonResult = chartData as ComparisonDto;

      this.chartData[1].data = Object.values(
        comparsonResult.previous ?? {}
      ).map((value) => {
        return parseFloat(this.decimalPipe.transform(value, '1.4-4') ?? '0');
      });
    }
    this.chartLabels = Object.keys(chartData.prediction ?? {}).map((key) => {
      return this.datePipe.transform(key, 'yyyy/MM/dd HH:mm') ?? '';
    });
    this.scrollableList = Object.keys(chartData.prediction ?? {}).map((key) => {
      return `[${this.datePipe.transform(key, 'yyyy-MM-dd HH:mm') ?? ''}]: ${
        this.decimalPipe.transform(chartData.prediction?.[key], '1.0-4') ?? ''
      }`;
    });
  }
}
