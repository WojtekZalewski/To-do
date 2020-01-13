import { TestBed } from '@angular/core/testing';

import { MylibService } from './mylib.service';

describe('MylibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MylibService = TestBed.get(MylibService);
    expect(service).toBeTruthy();
  });
});
