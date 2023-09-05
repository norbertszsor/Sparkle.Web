import { TestBed } from '@angular/core/testing';

import { SparkleApiService } from './sparkle-api.service';

describe('SparkleApiService', () => {
  let service: SparkleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparkleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
