import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QAndA } from '../models/q-and-a';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { QAList } from '../models/q-alist';

@Injectable({
  providedIn: 'root'
})
export class LifeQuestionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    })
  };



  private baseUrl = "http://localhost:8080/api/qandAs"

  constructor(private httpClient: HttpClient) { }

  getLifeQuestion(randomNum: number): Observable<QAndAs> {
    return this.httpClient.get<QAndAs>(`http://localhost:8080/api/qandAs/search/findByQuestionId?questionId=${randomNum}`, this.httpOptions)
  }

  // getLifeQuestionList(): Observable<QAndA[]> {
  //   let varQList = this.httpClient.get<QAndAs>('http://localhost:8080/api/qandAs')
  //   console.log(varQList.pipe(pluck("_embedded", "qandAs")))
  //  return varQList.pipe(pluck("_embedded", "qandAs"))
  // }

  getLifeQuestionList(): Observable<QAndAs> {
    return this.httpClient.get<QAndAs>('http://localhost:8080/api/qandAs')
  }

  addLifeQuestion(newQuestion: QAList) {
    const jsonQuestion = JSON.stringify(newQuestion)
    this.httpClient.post<QAList>(`${this.baseUrl}`, jsonQuestion, this.httpOptions).subscribe(
      (response) => console.log("response" + response),
      (error) => console.log(error)
    )
  }

  submitAnswer(id: number, questionSet: QAndA): void {
    console.log(questionSet);
    console.log(id);
    const jsonPC = JSON.stringify(questionSet);
    this.httpClient.post<QAndA>(`${this.baseUrl}`, jsonPC, this.httpOptions).subscribe(
      (response) => console.log("response" + response),
      (error) => console.log(error)
    );
  }
}

  interface QAndAs {
    _embedded: {
      qandAs: QAndA[];
  }
}
