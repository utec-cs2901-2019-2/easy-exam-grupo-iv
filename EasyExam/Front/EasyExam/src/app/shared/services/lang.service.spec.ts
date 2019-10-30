import { TestBed } from '@angular/core/testing';

import { LangServiceService } from './lang-service.service';

describe('LangServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangServiceService = TestBed.get(LangServiceService);
    expect(service).toBeTruthy();
  });
});
