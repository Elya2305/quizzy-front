import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuestionWithCorrectAnswer, QuizResult} from "../shared/dto/quiz";
import {QuizService} from "../shared/services/quiz.service";

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.scss']
})
export class FinishGameComponent implements OnInit {
  quizResult: QuizResult
  correctAnswers: QuestionWithCorrectAnswer[]

  constructor(private router: Router,
              private quizService: QuizService) {

    let quizResult = this.router.getCurrentNavigation()?.extras?.state;

    if (!quizResult) {
      this.router.navigate(['create-game'])
    }
    this.quizResult = <QuizResult>quizResult

    this.quizService.getCorrectAnswers(this.quizResult.quiz_uuid)
      .subscribe(answers => {
        console.log(answers)
        this.correctAnswers = answers
      });
  }

  ngOnInit(): void {

  }
}
