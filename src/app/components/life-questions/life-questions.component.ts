import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QAndA } from 'src/app/models/q-and-a';
import { LifeQuestionService } from 'src/app/services/life-question.service';


@Component({
  selector: 'app-life-questions',
  templateUrl: './life-questions.component.html',
  styleUrls: ['./life-questions.component.css']
})
export class LifeQuestionsComponent implements OnInit {

  questionSet: QAndA = new QAndA(1,'','');
  randomNum: number = 0;
  qItems: QAndA[] = [];


  constructor(private lifeQuestionsService: LifeQuestionService, private fb: FormBuilder) { }


  lifeQuestionDetails = this.fb.group({
    // questionId: ['', Validators.required],
    question: ['', Validators.required],
    answer: ['']
  })

  setQList() {
    this.lifeQuestionsService.getLifeQuestionList().subscribe(
      data => {this.qItems = data._embedded.qandAs;
      }
    )
  }

isAnswered(itemAnswer: string) {
  if (itemAnswer === '') {
    return false
  } else {
    return true
  }
}


  generateNumber() {
    this.randomNum = this.randomNumberGen();
    console.log(this.randomNum);
    this.lifeQuestionsService.getLifeQuestion(this.randomNum).subscribe(
      data => {this.questionSet = data._embedded.qandAs[0];
        // this.lifeQuestionDetails.get('questionId').setValue(this.questionSet.questionId);
        this.lifeQuestionDetails.get('question').setValue(this.questionSet.question);
        this.lifeQuestionDetails.get('answer').setValue(this.questionSet.answer);
      }
    )
  }

  onSubmit() {
    // let questionId = this.lifeQuestionDetails.get('questionId').value;
    let questionText = this.lifeQuestionDetails.get('question').value;
    let answerText = this.lifeQuestionDetails.get('answer').value;
    const questionGroup = new QAndA(this.randomNum, questionText, answerText);
    this.lifeQuestionsService.submitAnswer(this.randomNum, questionGroup);
  }

  randomNumberGen() {
    return Math.floor((Math.random() * 24) + 1);
  }

  ngOnInit(): void {
    this.setQList()

  }

}
