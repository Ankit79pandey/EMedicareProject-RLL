import { TestBed } from '@angular/core/testing';

import { AddmedicineService } from './addmedicine.service';

describe('AddmedicineService', () => {
  let service: AddmedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
