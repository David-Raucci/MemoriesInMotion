import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeQuestionsComponent } from './life-questions.component';

describe('LifeQuestionsComponent', () => {
  let component: LifeQuestionsComponent;
  let fixture: ComponentFixture<LifeQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
