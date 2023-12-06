import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiNoConnectionModalComponent } from './sparkle-ui-no-connection-modal.component';

describe('SparkleUiNoConnectionModalComponent', () => {
  let component: SparkleUiNoConnectionModalComponent;
  let fixture: ComponentFixture<SparkleUiNoConnectionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiNoConnectionModalComponent]
    });
    fixture = TestBed.createComponent(SparkleUiNoConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
