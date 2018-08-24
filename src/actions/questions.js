import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function getQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
