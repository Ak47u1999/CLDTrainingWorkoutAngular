import { TestBed } from '@angular/core/testing';

import { GlobalTableService } from './global-table.service';

describe('GlobalTableService', () => {
  let service: GlobalTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
