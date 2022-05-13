import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category, difficulties, types} from "../shared/dto/quiz";
import {QuizService} from "../shared/services/quiz.service";
import {Router} from "@angular/router";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  form: FormGroup;
  categories: Category[]
  loadQuiz: boolean

  constructor(private quizService: QuizService,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit(): void {

    this.checkActiveQuizExists();

    this.form = new FormGroup({
      difficulty: new FormControl(difficulties[0].value, Validators.required),
      type: new FormControl(types[0].value, Validators.required),
      category: new FormControl('', Validators.required),
      amount: new FormControl(5, Validators.required),
    });

    this.quizService.getCategories().subscribe(categories => {
      this.categories = categories
      console.log(this.categories)
      this.form.get('category')?.setValue(this.categories[0].value)
    });
  }

  checkActiveQuizExists() {
    this.quizService.getActiveQuiz()
      .subscribe(activeQuiz => {
        if (activeQuiz.exist) {
          this.alertService.info('Not finished quiz was found')
          this.router.navigate(['/play-game'], {state: activeQuiz.quiz})
        }
      })
  }

  initGame() {
    if (!this.form.valid) {
      return;
    }

    const quizParams = {
      difficulty: this.form.get('difficulty')?.value,
      type: this.form.get('type')?.value,
      category: this.form.get('category')?.value,
      amount: this.form.get('amount')?.value,
    }

    this.loadQuiz = true
    this.quizService.startQuiz(quizParams).subscribe(response => {
      console.log(response);
      this.loadQuiz = false
      this.router.navigate(['/play-game'], {state: response})
    });
  }

  getDifficulties() {
    return difficulties;
  }

  getTypes() {
    return types;
  }
}
