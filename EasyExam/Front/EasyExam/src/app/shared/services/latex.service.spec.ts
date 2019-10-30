import { TestBed } from '@angular/core/testing';

import { LatexServiceService } from './latex-service.service';

describe('LatexServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatexServiceService = TestBed.get(LatexServiceService);
    expect(service).toBeTruthy();
  });
});
