import { TestBed } from '@angular/core/testing';

import { PokeLookupService } from './poke-lookup.service';

describe('PokeLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeLookupService = TestBed.get(PokeLookupService);
    expect(service).toBeTruthy();
  });
});
