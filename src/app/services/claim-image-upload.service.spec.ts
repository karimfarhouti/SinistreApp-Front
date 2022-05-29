import { TestBed } from '@angular/core/testing';

import { ClaimImageUploadService } from './claim-image-upload.service';

describe('ClaimImageUploadService', () => {
  let service: ClaimImageUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimImageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
