import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiFooterComponent } from './sparkle-ui-footer.component';

describe('SparkleUiFooterComponent', () => {
  let component: SparkleUiFooterComponent;
  let fixture: ComponentFixture<SparkleUiFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiFooterComponent]
    });
    fixture = TestBed.createComponent(SparkleUiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
