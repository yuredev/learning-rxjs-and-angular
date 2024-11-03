import { TestBed } from '@angular/core/testing';

import { CachorroServiceService } from './cachorro-service.service';

describe('CachorroServiceService', () => {
  let service: CachorroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachorroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
