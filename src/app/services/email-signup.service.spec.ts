import { TestBed } from '@angular/core/testing';

import { EmailSignupService } from './email-signup.service';

describe('EmailSignupService', () => {
  let service: EmailSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
