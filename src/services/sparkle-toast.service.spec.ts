import { TestBed } from '@angular/core/testing';

import { SparkleToastService } from './sparkle-toast.service';

describe('SparkleToastService', () => {
  let service: SparkleToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparkleToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
