import { getInitialData, saveQuestion } from '../utils/api'
import { getUsers, addUserQuestion } from '../actions/users'
import { getQuestions, addQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'kassandra'

export function handleInitialData () {
  return (dispatch) => {

    dispatch(showLoading())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function addQuestionAction (user, optOne, optTwo) {
  return dispatch => {

    dispatch(showLoading())

    saveQuestion({
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: user
    }).then(question => {
      dispatch(addUserQuestion(question, user))
      dispatch(addQuestion(question))
    })
    .then(() => dispatch(hideLoading()))
  }
}
