import { TestBed } from '@angular/core/testing';

import { ListApiService } from './list-api.service';

describe('ItemApiService', () => {
  let service: ListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
