import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QAList } from 'src/app/models/q-alist';
import { QAndA } from 'src/app/models/q-and-a';
import { LifeQuestionService } from 'src/app/services/life-question.service';

@Component({
  selector: 'app-life-questions-admin',
  templateUrl: './life-questions-admin.component.html',
  styleUrls: ['./life-questions-admin.component.css']
})
export class LifeQuestionsAdminComponent implements OnInit {

  constructor(private lifeQuestions: LifeQuestionService, private fb: FormBuilder) { }

  addQuestionForm = this.fb.group({
    question: ['', Validators.required],
    answer: ['']
  })

  onSubmit() {
    let question = this.addQuestionForm.get('question').value;
    let answer = this.addQuestionForm.get('answer').value;
    const newQuestion = new QAList(question, answer);
    this.lifeQuestions.addLifeQuestion(newQuestion);
  }

  ngOnInit(): void {
  }

}
