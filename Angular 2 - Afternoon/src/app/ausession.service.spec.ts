import { TestBed } from '@angular/core/testing';

import { AuSessionService } from './ausession.service';

describe('TodoService', () => {
  let service: AuSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
