import { TestBed } from '@angular/core/testing';

import { LifeQuestionService } from './life-question.service';

describe('LifeQuestionService', () => {
  let service: LifeQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
