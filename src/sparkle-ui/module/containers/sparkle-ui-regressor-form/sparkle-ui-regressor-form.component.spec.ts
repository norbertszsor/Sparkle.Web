import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiRegressorFormComponent } from './sparkle-ui-regressor-form.component';

describe('SparkleUiRegressorFormComponent', () => {
  let component: SparkleUiRegressorFormComponent;
  let fixture: ComponentFixture<SparkleUiRegressorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiRegressorFormComponent]
    });
    fixture = TestBed.createComponent(SparkleUiRegressorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
