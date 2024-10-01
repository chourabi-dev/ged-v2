import { TestBed } from '@angular/core/testing';

import { SurevyService } from './surevy.service';

describe('SurevyService', () => {
  let service: SurevyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurevyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
