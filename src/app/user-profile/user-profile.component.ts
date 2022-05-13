import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {HistoryEntry, QuizStatistics, UserProfile} from "../shared/dto/quiz";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  statistics: QuizStatistics;
  history: HistoryEntry[];
  userProfile: UserProfile;

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {

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
      })
  }
}
