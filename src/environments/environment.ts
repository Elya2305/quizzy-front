// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: '1079591479751-6fiu4a583rtir3o7qbctrs74bjpnh3m1.apps.googleusercontent.com',

  startQuiz: 'http://localhost:8080/quiz/start',
  finishQuiz: 'http://localhost:8080/quiz/finish',
  saveQuestionAnswer: 'http://localhost:8080/question-answer',
  getCorrectAnswers: 'http://localhost:8080/quiz/correct-answers',
  getActiveQuizIfExists: 'http://localhost:8080/quiz/active',
  getStatistics: 'http://localhost:8080/history/statistics',
  getGlobalStatistics: 'http://localhost:8080/history/statistics/global',
  getHistory: 'http://localhost:8080/history',
  getCategories: 'http://localhost:8080/category/all',
  getUserProfile: 'http://localhost:8080/user/profile',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
