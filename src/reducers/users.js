import { RECEIVE_USERS, ADD_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION :
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: [...state[action.user].questions, action.question.id]
        }
      }
    default :
      return state
  }
}
