import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CompanyDto,
  ComparisonDto,
  MeterDto,
  PredictionDto,
} from 'src/models/data.model';
import { SparkleApiService } from 'src/services/sparkle-api.service';
import { SparkleToastService } from 'src/services/sparkle-toast.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartType } from 'src/sparkle-ui/module/components/sparkle-ui-chart/sparkle-ui-chart.component';

export type regressionData = {
  regressionData: ComparisonDto | PredictionDto | null;
};

type timeStampOption = {
  display: string;
  value: number;
};

@Component({
  selector: 'sparkle-ui-regressor-form',
  templateUrl: './sparkle-ui-regressor-form.component.html',
  styleUrls: ['./sparkle-ui-regressor-form.component.scss'],
})
export class SparkleUiRegressorFormComponent {
  @Output() regresionDataEvent = new EventEmitter<regressionData>();
  @Output() chartTypeEvent = new EventEmitter<ChartType>();

  private _company: CompanyDto | null = null;

  @Input()
  set company(value: CompanyDto | null) {
    this._company = value;
    if (value) {
      this._sparkleApiService
        .getMeterList({
          companyId: value.id,
        })
        .subscribe(
          (meters) => {
            this.meterAutocompleteOptions = meters.items ?? [];
          },
          (error) => {
            this._sparkleToastService.openErrorToast({
              message: `Error loading meters list. Api response: ${error.message}`,
            });
          }
        );
    }
  }

  get company(): CompanyDto | null {
    return this._company;
  }

  get getSelectedMeterIdValue(): string | null {
    return this.selectedMeterIdFormControl.value;
  }

  get getSelectedTimeStampValue(): number | null {
    const option = this.selectedTimeStampFormControl.value;
    return option ? option.value : null;
  }

  get getSelectedRegressorMethodValue(): string | null {
    return this.selectedReggressorMethodFormControl.value;
  }

  @Input() isLoading: boolean = false;

  selectedMeterIdFormControl: FormControl<string | null> = new FormControl(
    null,
    Validators.required
  );

  selectedTimeStampFormControl: FormControl<timeStampOption | null> =
    new FormControl(null, Validators.required);

  selectedReggressorMethodFormControl: FormControl<string | null> =
    new FormControl(null, Validators.required);

  meterAutocompleteOptions: MeterDto[] = [];

  timeSelectOptions: timeStampOption[] = [
    { display: 'Day', value: 24 },
    { display: 'Two days', value: 48 },
    { display: 'Week', value: 168 },
    { display: 'Month', value: 720 },
  ];

  regressorMethodSelectOptions: string[] = ['Prediction', 'Comparison'];

  regressorForm: FormGroup;

  constructor(
    private _sparkleApiService: SparkleApiService,
    private _sparkleToastService: SparkleToastService
  ) {
    this.regressorForm = new FormGroup({
      selectedMeterId: this.selectedMeterIdFormControl,
      selectedTimeStamp: this.selectedTimeStampFormControl,
      selectedReggressorMethod: this.selectedReggressorMethodFormControl,
    });
  }

  public onRegressorMethodSelect() {
    this.chartTypeEvent.emit(
      this.selectedReggressorMethodFormControl.value as ChartType
    );
  }

  private _validateForm(): boolean {
    if (this.regressorForm.invalid) {
      this._sparkleToastService.openWarningToast({
        message: `Please fill in all the required fields.`,
      });
      return false;
    }
    return true;
  }

  onSubmit(event: Event) {
    event.stopPropagation();

    if (!this._validateForm()) return;

    this.isLoading = true;

    const _apiMethod =
      this.selectedReggressorMethodFormControl.value === 'Comparison'
        ? 'getComparison'
        : 'getPrediction';

    this._sparkleApiService[_apiMethod]({
      MeterId: this.selectedMeterIdFormControl.value ?? '',
      Hours: this.getSelectedTimeStampValue ?? 0,
    }).subscribe(
      (response: PredictionDto | ComparisonDto) => {
        const data = response.hasOwnProperty('previous')
          ? (response as ComparisonDto)
          : (response as PredictionDto);
        this.regresionDataEvent.next({
          regressionData: data,
        });
      },
      (error) => {
        this._sparkleToastService.openErrorToast({
          message: `Error loading regression data. Api response: ${error.message}`,
        });
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
