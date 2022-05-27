import { TestBed } from '@angular/core/testing';

import { DtoEntityMapperService } from './claim-mapper.service';

describe('DtoEntityMapperService', () => {
  let service: DtoEntityMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtoEntityMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
