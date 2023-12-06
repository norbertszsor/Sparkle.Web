import { Component, Input } from '@angular/core';
import { ZoomPluginOptions } from 'chartjs-plugin-zoom/types/options';
import { ComparisonDto, PredictionDto } from 'src/models/data.model';
import { sparkleDatePipe } from 'src/shared/module/date.pipe';
import { sparkleDecimalPipe } from 'src/shared/module/decimal.pipe';
import { Dictionary } from 'src/shared/module/dictionary.interface';

import { ChartDataset, ChartOptions, Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

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

export type ChartType = 'prediction' | 'comparison' | null;

@Component({
  selector: 'sparkle-ui-chart',
  templateUrl: './sparkle-ui-chart.component.html',
  styleUrls: ['./sparkle-ui-chart.component.scss'],
})
export class SparkleUiChartComponent {
  public chartData: ChartDataset[] = [];

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

  @Input()
  public set data(value: PredictionDto | ComparisonDto | null) {
    this._data = value;

    this.setChartData(this._data);
    this.setChartLabels(this._data);
  }

  public get data(): PredictionDto | ComparisonDto | null {
    return this._data;
  }

  @Input()
  public set chartType(value: ChartType) {
    this._chartType = value?.toLowerCase() as ChartType;

    if (this._chartType === 'prediction') {
      this.chartData = [this.chartDataPrediction];
    } else if (this._chartType === 'comparison') {
      this.chartData = [this.chartDataPrediction, this.chartDataComparison];
    }
  }

  public get chartType(): ChartType {
    return this._chartType;
  }

  private _data: PredictionDto | ComparisonDto | null = null;
  private _chartType: ChartType = 'prediction';

  private chartDataPrediction: ChartDataset = {
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

  private chartDataComparison: ChartDataset = {
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

  private setChartData(data: PredictionDto | ComparisonDto | null) {
    if (!data) {
      return;
    }

    const toChartData = (dictionary?: Dictionary<string, number> | null) => {
      return Object.values(dictionary as Dictionary<string, number>)?.map(
        (item) => {
          return parseFloat(
            sparkleDecimalPipe.transform(item.toString() ?? '0', '1.4-4') ?? '0'
          );
        }
      );
    };

    this.chartData[0].data = toChartData(data.prediction) ?? [];

    if (data && 'previous' in data) {
      this.chartData[1].data = toChartData(data.previous) ?? [];
    }
  }

  private setChartLabels(data: PredictionDto | ComparisonDto | null) {
    if (!data) {
      return;
    }
    const toChartLabels = (dictionary?: Dictionary<string, number> | null) => {
      return Object.keys(dictionary as Dictionary<string, number>)?.map(
        (item) => {
          return sparkleDatePipe.transform(item, 'yyyy/MM/dd HH:mm') ?? '';
        }
      );
    };

    this.chartLabels = toChartLabels(data?.prediction) ?? [];
  }
}
