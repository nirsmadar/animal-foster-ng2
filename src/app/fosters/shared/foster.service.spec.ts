/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FosterService } from './foster.service';

describe('FosterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FosterService]
    });
  });

  it('should ...', inject([FosterService], (service: FosterService) => {
    expect(service).toBeTruthy();
  }));
});
