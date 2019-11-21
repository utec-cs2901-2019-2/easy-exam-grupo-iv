import { TestBed } from '@angular/core/testing';

import { ConnectionServiceService } from './connection-service.service';

describe('ConnectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionServiceService = TestBed.get(ConnectionServiceService);
    expect(service).toBeTruthy();
  });
});
