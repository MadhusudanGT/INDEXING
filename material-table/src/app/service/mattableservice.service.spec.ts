import { TestBed } from '@angular/core/testing';

import { MattableserviceService } from './mattableservice.service';

describe('MattableserviceService', () => {
  let service: MattableserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MattableserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
