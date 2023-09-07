import { Component, ElementRef } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { CompanyDto, MeterDto } from 'src/models/data.models';
import { SparkleApiService } from 'src/services/sparkle-api.service';
import { OnInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';

type timeStampOption = {
  display: string;
  value: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public scrollableList: string[] = [];

  public chartData: ChartDataset[] = [
    {
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
    },
  ];

  public chartLabels: string[] = [];

  public chartOptions: ChartOptions = {
    responsive: false,
  };

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

  public chartLegend = false;

  public chartType = 'line';

  public chartPlugins = [];

  public datePipe = new DatePipe('en-US');
  public decimalPipe = new DecimalPipe('en-US');

  isLoading = false;

  logoUrl = '/assets/images/sparkle-logo.png';

  selectedMeterId: string | null = null;
  selectedTimeStamp: timeStampOption | null = null;

  autocompleteOptions: MeterDto[] = [];

  selectOptions: timeStampOption[] = [
    { display: '24 Hours', value: 24 },
    { display: '48 Hours', value: 48 },
    { display: '168 Hours', value: 168 },
    { display: '720 Hours', value: 720 },
  ];

  company: CompanyDto | null = null;

  constructor(
    private el: ElementRef,
    private sparkleApiService: SparkleApiService
  ) {}

  ngOnInit() {
    this.sparkleApiService.getCompany({}).subscribe((company) => {
      this.company = company;
      if (company) {
        this.sparkleApiService
          .getMeterList({
            companyId: company.id,
          })
          .subscribe((meters) => {
            this.autocompleteOptions = meters.items ?? [];
          });
      }
    });
  }

  onButtonClick(event: Event) {
    this.isLoading = true;

    event.stopPropagation();

    this.sparkleApiService
      .getPrediction({
        MeterId: this.selectedMeterId ?? '',
        Hours: this.selectedTimeStamp?.value ?? 0,
      })
      .subscribe((prediction) => {
        if (prediction) {
          this.chartData[0].data = Object.values(
            prediction.prediction ?? {}
          ).map((value) => {
            return parseFloat(
              this.decimalPipe.transform(value, '1.4-4') ?? '0'
            );
          });
          this.chartLabels = Object.keys(prediction.prediction ?? {}).map(
            (key) => {
              return this.datePipe.transform(key,'yyyy/MM/dd HH:mm') ?? '';
            }
          );
          this.scrollableList = Object.keys(prediction.prediction ?? {}).map(
            (key) => {
              return `${this.datePipe.transform(key, "yyyy/MM/dd HH:mm") ?? ''} ==> ${
                this.decimalPipe.transform(
                  prediction.prediction?.[key],
                  '1.0-4'
                ) ?? ''
              }`;
            }
          );
          this.isLoading = false;
        }
      }),
      () => {
        this.isLoading = false;
      };
  }

  onOptionSelected(event: any) {}
}
