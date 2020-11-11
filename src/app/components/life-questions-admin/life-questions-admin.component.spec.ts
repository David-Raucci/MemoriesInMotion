import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeQuestionsAdminComponent } from './life-questions-admin.component';

describe('LifeQuestionsAdminComponent', () => {
  let component: LifeQuestionsAdminComponent;
  let fixture: ComponentFixture<LifeQuestionsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeQuestionsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeQuestionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
