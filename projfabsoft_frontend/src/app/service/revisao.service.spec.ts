import { TestBed } from '@angular/core/testing';

import { RevisaoService } from './revisao.service';

describe('RevisaoService', () => {
  let service: RevisaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
