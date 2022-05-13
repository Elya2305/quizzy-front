import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Question, Quiz} from "../shared/dto/quiz";
import {QuizService} from "../shared/services/quiz.service";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {

  questions: Question[]
  quizUuid: string

  constructor(private router: Router,
              private quizService: QuizService) {
    let quiz = this.router.getCurrentNavigation()?.extras?.state;
    if (quiz == null) {
      this.router.navigate(['/create-game'])
    }

    this.questions = (<Quiz>quiz).questions;
    this.quizUuid = (<Quiz>quiz).uuid;
  }

  ngOnInit(): void {

  }

  saveAnswer(answerUuid: string) {
    const questionAnswer = {
      answer_uuid: answerUuid
    }

    this.quizService.saveQuestionAnswer(questionAnswer)
      .subscribe(res => {

        for (let qv of this.questions) {
          for (let an of qv.answers) {
            if (an['uuid'] === answerUuid) {
              an['answered'] = true
            }
          }
        }
      });
  }

  unansweredQuestionIsPresent(): boolean {
    for (let qv of this.questions) {
      let answered = qv.answers.filter(answer => answer.answered)
      if (answered.length == 0) {
        return true
      }
    }
    return false;
  }

  finish() {
    this.quizService.finishQuiz(this.quizUuid).subscribe(result => {
      this.router.navigate(['/finish-game'], {state: result})
    })
  }
}
