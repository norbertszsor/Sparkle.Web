import { Component, ViewChild } from '@angular/core';
import {
  CompanyDto,
  ComparisonDto,
  PredictionDto,
} from 'src/models/data.model';
import { SparkleApiService } from 'src/services/sparkle-api.service';
import { OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SparkleToastService } from 'src/services/sparkle-toast.service';
import { regressionData } from 'src/sparkle-ui/module/containers/sparkle-ui-regressor-form/sparkle-ui-regressor-form.component';
import { ChartType } from 'src/sparkle-ui/module/components/sparkle-ui-chart/sparkle-ui-chart.component';
import {
  Dictionary,
  mapToDictionary,
} from 'src/shared/module/dictionary.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  company: CompanyDto | null = null;

  logoPath = '/assets/images/sparkle-logo.png';

  chartType: ChartType = null;

  chartData: ComparisonDto | PredictionDto | null = null;

  scrollableListData: Dictionary<string, number> = [];

  constructor(
    private sparkleApiService: SparkleApiService,
    private sparkleToastService: SparkleToastService
  ) {}

  ngOnInit() {
    this.sparkleApiService.getCompany({}).subscribe(
      (company) => {
        this.company = company;
      },
      (error) => {
        this.sparkleToastService.openErrorToast({
          message: `Error loading company. Api response: ${error.message}`,
        });
        this.openDrawer();
      }
    );
  }

  onRegressionDataEvent(data: regressionData) {
    this.chartData = data.regressionData;
    this.scrollableListData = mapToDictionary<string, number>(
      this.chartData?.prediction ?? []
    );
  }

  onChartTypeEvent(chartType: ChartType) {
    this.chartType = chartType;
  }

  onRecconnectClick() {
    if (this.drawer) {
      this.drawer.close();
    }
    this.ngOnInit();
  }
  openDrawer() {
    this.drawer.open();
  }
}
