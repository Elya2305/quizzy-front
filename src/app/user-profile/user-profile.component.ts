import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {HistoryEntry, QuizStatistics, UserProfile} from "../shared/dto/quiz";
import {concatMap, delay, from, of} from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  statistics: QuizStatistics;
  history: HistoryEntry[];
  userProfile: UserProfile;
  herokuIsWakingUp = false;

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    from([this.herokuIsWakingUp]).pipe(
      concatMap(herokuIsWakingUp => of(herokuIsWakingUp).pipe(delay(700)))
    ).subscribe(() => {
      if (!this.userProfile) {
        this.herokuIsWakingUp = true
      }
    });

    this.quizService.getStatistics()
      .subscribe(statistics => {
        this.statistics = statistics
      });

    this.quizService.getHistory()
      .subscribe(history => {
        this.history = history
      });

    this.quizService.getUserProfile()
      .subscribe(profile => {
        if (!profile.picture_url) {
          profile.picture_url = 'https://avatarfiles.alphacoders.com/798/79894.jpg'
        }
        this.userProfile = profile;
        this.herokuIsWakingUp = false;
      })
  }
}
