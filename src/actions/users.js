export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'

export function getUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserQuestion (question, user) {
  return {
    type: ADD_USER_QUESTION,
    question,
    user
  }
}

export function saveUserAnswer ({ authedUser, qid, answer }) {
  return {
    type: USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}
