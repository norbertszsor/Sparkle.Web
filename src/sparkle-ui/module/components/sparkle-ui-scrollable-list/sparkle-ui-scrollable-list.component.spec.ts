import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleUiScrollableListComponent } from './sparkle-ui-scrollable-list.component';

describe('SparkleUiScrollableListComponent', () => {
  let component: SparkleUiScrollableListComponent;
  let fixture: ComponentFixture<SparkleUiScrollableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleUiScrollableListComponent]
    });
    fixture = TestBed.createComponent(SparkleUiScrollableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
