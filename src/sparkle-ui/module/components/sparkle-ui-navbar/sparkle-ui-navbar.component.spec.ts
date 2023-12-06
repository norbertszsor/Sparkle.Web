import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiNavbarComponent } from './sparkle-ui-navbar.component';

describe('SparkleUiNavbarComponent', () => {
  let component: SparkleUiNavbarComponent;
  let fixture: ComponentFixture<SparkleUiNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiNavbarComponent]
    });
    fixture = TestBed.createComponent(SparkleUiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
