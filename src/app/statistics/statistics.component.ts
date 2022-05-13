import {Component, OnInit} from '@angular/core';
import {QuizGlobalStatistics} from "../shared/dto/quiz";
import {QuizService} from "../shared/services/quiz.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statistics: QuizGlobalStatistics[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quizService.getGlobalStatistics()
      .subscribe(response => {
        this.statistics = response;
      })
  }

}
