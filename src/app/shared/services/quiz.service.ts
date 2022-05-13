import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {
  ActiveQuiz,
  Category,
  HistoryEntry,
  QuestionAnswer,
  QuestionWithCorrectAnswer,
  Quiz,
  QuizGlobalStatistics,
  QuizParameters,
  QuizResult,
  QuizStatistics,
  UserProfile
} from '../dto/quiz';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuizService {

  constructor(private http: HttpClient) {
  }

  startQuiz(quizParameters: QuizParameters): Observable<Quiz> {
    return this.http.post<Quiz>(`${environment.startQuiz}`, quizParameters);
  }

  finishQuiz(quizUuid: string): Observable<QuizResult> {
    return this.http.patch<QuizResult>(`${environment.finishQuiz}/${quizUuid}`, quizUuid);
  }

  saveQuestionAnswer(questionAnswer: QuestionAnswer): Observable<boolean> {
    return this.http.post<boolean>(`${environment.saveQuestionAnswer}`, questionAnswer);
  }

  getCorrectAnswers(quizUuid: string): Observable<QuestionWithCorrectAnswer[]> {
    return this.http.get<QuestionWithCorrectAnswer[]>(`${environment.getCorrectAnswers}/${quizUuid}`);
  }

  getActiveQuiz(): Observable<ActiveQuiz> {
    return this.http.get<ActiveQuiz>(`${environment.getActiveQuizIfExists}`)
  }

  getStatistics(): Observable<QuizStatistics> {
    return this.http.get<QuizStatistics>(`${environment.getStatistics}`)
  }

  getGlobalStatistics(): Observable<QuizGlobalStatistics[]> {
    return this.http.get<QuizGlobalStatistics[]>(`${environment.getGlobalStatistics}`)
  }

  getHistory(): Observable<HistoryEntry[]> {
    return this.http.get<HistoryEntry[]>(`${environment.getHistory}`)
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.getCategories}`)
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.getUserProfile}`)
  }
}
