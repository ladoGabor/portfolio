import { Injectable } from '@angular/core';
import { GetQuestionsService } from './get-questions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// These two interfaces are needed to handle questions object array
interface Answer {
  id: number;
  text: string;
  note: string;
}
interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireBuilderService {

  constructor(private getQuestions:GetQuestionsService) {}

  // the getQuestionnaire will return an array of questions at random
  getQuestionnaire() : Observable<Question[]> {

    //read data using the getQuestions service (which returns an array of objects)
    return this.getQuestions.getQuestions().pipe(

      map((data : Question[]) => {

        // check if the response was an array, and if it's lenght were at least 3
        if (!Array.isArray(data) || data.length < 3) {
          throw new Error('Data is not an array or does not have at least 3 items');
        }
        // creates an empty Queston array which will be the returned value of this service
        let questionnaire: Question[] = [];
  //!!! You can set the number of questions here !!!
        while (questionnaire.length < 3) {
          const randomIndex = Math.floor(Math.random() * data.length);

          // grab a question from the array of questions and 
          // push it into the questionnaire only if
          // it is new to the questionnaire
          if (!questionnaire.includes(data[randomIndex])) {
            questionnaire.push(data[randomIndex]);
          }
        }
        return questionnaire;
      })
    );
  }
}