import { TestBed, async, inject } from '@angular/core/testing';

import { PreviewGuard } from './preview.guard';

describe('PreviewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewGuard]
    });
  });

  it('should ...', inject([PreviewGuard], (guard: PreviewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
