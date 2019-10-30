import { TestBed } from '@angular/core/testing';

import { HttpConectionService } from './http-conection.service';

describe('HttpConectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpConectionService = TestBed.get(HttpConectionService);
    expect(service).toBeTruthy();
  });
});
