import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public scrollableList = Array.from({ length: 100 }).map(
    (_, i) => `Item #${i}`
  );

  public chartData: ChartDataset[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
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

  public chartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

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

  public chartPlugins = [

  ];

  logoUrl = '/assets/images/sparkle-logo.png';

  autocompleteOptions = ['One', 'Two', 'Three'];

  timeStampOptions = ['24 [ticks]', '48 [ticks]', '168 [ticks]', '720 [ticks]'];
}
