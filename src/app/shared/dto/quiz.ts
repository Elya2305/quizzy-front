export class QuizParameters {
  difficulty: string;
  type: string;
  category: string;
  amount: number;
}

export class Quiz {
  uuid: string;
  questions: Question[];
}

export class QuizResult {
  quiz_uuid: string;
  score: number;
  total_questions: number;
  total_correct_questions: number
}

export class ActiveQuiz {
  exist: boolean;
  quiz: Quiz;
}

export class Question {
  uuid: string;
  difficulty: string;
  type: Type;
  category: string;
  question: string;
  answers: Answer[];
}

export class Answer {
  uuid: string;
  answer: string;
  answered: boolean;
}

export class QuestionAnswer {
  answer_uuid: string;
}

export class HistoryEntry {
  timestamp: string;
  difficulty: Difficulty;
  score: number;
}

export class QuizStatistics {
  total_quizzes: number;
  total_answered_questions: number;
  total_correct_questions: number;
  percentage_of_correct_questions: number;
}

export class QuizGlobalStatistics {
  user_uuid: string;
  user_name: string;
  total_quizzes: number;
  total_score: number;
}

export class Category {
  value: string;
  display_title: string;
}

export class Difficulty {
  value: string;
  display_title: string;
}

export class Type {
  value: string;
  display_title: string;
}

export const difficulties: Difficulty[] = [
  {
    value: 'EASY',
    display_title: 'Easy'
  },
  {
    value: 'MEDIUM',
    display_title: 'Medium'
  },
  {
    value: 'HARD',
    display_title: 'Hard'
  },
]

export const types: Type[] = [
  {
    value: 'MULTIPLE_CHOICE',
    display_title: 'Multiple choice'
  },
  {
    value: 'TRUE_OR_FALSE',
    display_title: 'True or false'
  }
]

export class UserProfile {
  uuid: string;
  email: string;
  first_name: string;
  picture_url: string
}

export class QuestionWithCorrectAnswer {
  uuid: string;
  question: string;
  correct_answer: CorrectAnswer;
}

export class CorrectAnswer {
  uuid: string;
  answer: string;
}
