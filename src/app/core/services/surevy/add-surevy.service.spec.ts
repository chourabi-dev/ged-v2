import { TestBed } from '@angular/core/testing';

import { AddSurevyService } from './add-surevy.service';

describe('AddSurevyService', () => {
  let service: AddSurevyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSurevyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
