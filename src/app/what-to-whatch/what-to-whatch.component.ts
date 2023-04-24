import { Component, OnInit } from '@angular/core';
import { QuestionnaireBuilderService } from '../services/questionnaire-builder.service';

@Component({
  selector: 'app-w2w',
  templateUrl: './what-to-whatch.component.html',
  styleUrls: ['./what-to-whatch.component.css']
})
export class WhatToWhatchComponent implements OnInit {

  questions:any;
  currentQuestion:any;
  questionIndex:number = 0;

  constructor(private questionnaire:QuestionnaireBuilderService){}

  ngOnInit(): void {
    this.questionnaire.getQuestionnaire().subscribe(data => {
      this.questions = data;
      this.currentQuestion = this.questions[this.questionIndex];
    })
  }
  
  logger():void {
    console.log(this.questions)
    console.log(this.currentQuestion)
  }
  
  sendAnswer(id?:number){
    console.log(id);
    this.questionIndex++;
    this.currentQuestion = this.questions[this.questionIndex];
  }
}


  // HCquestions = [
  //   { 
  //     id: 1,
  //     text: 'What is your favorite color?',
  //     options: [
  //       { id: 1, text: 'Red' },
  //       { id: 2, text: 'Blue' },
  //       { id: 3, text: 'Green' }
  //     ]
  //   },
  //   { 
  //     id: 2,
  //     text: 'What is your favorite food?',
  //     options: [
  //       { id: 1, text: 'Pizza' },
  //       { id: 2, text: 'Burgers' },
  //       { id: 3, text: 'Tacos' }
  //     ]
  //   }
  // ];
  // i = 0;
  // currentQuestion = this.HCquestions[this.i];
  // sendAnswer(id?:any){
  //   this.i++;
  //   this.currentQuestion = this.HCquestions[this.i];
  //   console.log(id)
  // }