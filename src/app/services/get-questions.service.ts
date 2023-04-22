import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  private jsonURL = '../assets/questions.json';
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

}
