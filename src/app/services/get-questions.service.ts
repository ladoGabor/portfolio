// This service loads the full collection of questions into the app from a JSON file
/* This service is working (2023.04.24) and will be used by the questionnaire-builder
      which will create a random array of 5-10 questions*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  private jsonURL = '../assets/db-temporary/five_questions.json';
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

}
