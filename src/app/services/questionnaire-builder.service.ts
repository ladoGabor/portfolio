import { Injectable } from '@angular/core';
import { GetQuestionsService } from './get-questions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireBuilderService {

  constructor(private getQuestions:GetQuestionsService) {}

  getQuestionnaire() : Observable<any> {
    return this.getQuestions.getQuestions().pipe(
      map(data => {
        return data;
      })
    );
  }


}
