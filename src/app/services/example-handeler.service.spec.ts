import { TestBed } from '@angular/core/testing';

import { ExampleHandelerService } from './example-handeler.service';

describe('ExampleHandelerService', () => {
  let service: ExampleHandelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleHandelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
