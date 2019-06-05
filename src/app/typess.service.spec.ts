import { TestBed, inject } from '@angular/core/testing';

import { TypessService } from './typess.service';

describe('TypessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypessService]
    });
  });

  it('should be created', inject([TypessService], (service: TypessService) => {
    expect(service).toBeTruthy();
  }));
});
