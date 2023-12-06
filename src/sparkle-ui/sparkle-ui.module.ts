import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkleUiNavbarComponent } from './module/components/sparkle-ui-navbar/sparkle-ui-navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SparkleUiFooterComponent } from './module/components/sparkle-ui-footer/sparkle-ui-footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SparkleUiScrollableListComponent } from './module/components/sparkle-ui-scrollable-list/sparkle-ui-scrollable-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SparkleUiChartComponent } from './module/components/sparkle-ui-chart/sparkle-ui-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { SparkleUiNoConnectionModalComponent } from './module/components/sparkle-ui-no-connection-modal/sparkle-ui-no-connection-modal.component';
import { SparkleUiRegressorFormComponent } from './module/containers/sparkle-ui-regressor-form/sparkle-ui-regressor-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    SparkleUiNavbarComponent,
    SparkleUiFooterComponent,
    SparkleUiScrollableListComponent,
    SparkleUiChartComponent,
    SparkleUiNoConnectionModalComponent,
    SparkleUiRegressorFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ScrollingModule,
    NgChartsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatListModule,
    SharedModule,
  ],
  exports: [
    SparkleUiNavbarComponent,
    SparkleUiFooterComponent,
    SparkleUiScrollableListComponent,
    SparkleUiChartComponent,
    SparkleUiNoConnectionModalComponent,
    SparkleUiRegressorFormComponent,
  ],
})
export class SparkleUiModule {}
