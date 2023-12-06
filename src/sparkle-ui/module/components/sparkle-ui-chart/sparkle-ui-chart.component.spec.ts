import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiChartComponent } from './sparkle-ui-chart.component';

describe('SparkleUiChartComponent', () => {
  let component: SparkleUiChartComponent;
  let fixture: ComponentFixture<SparkleUiChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiChartComponent]
    });
    fixture = TestBed.createComponent(SparkleUiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
