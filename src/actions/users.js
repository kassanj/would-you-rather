export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

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
