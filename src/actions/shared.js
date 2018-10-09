import { getAuthUsers, getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { getUsers, addUserQuestion } from '../actions/users'
import { getQuestions, addQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'kassandra';

export function handleInitialData () {
  return (dispatch) => {

    dispatch(showLoading())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleSetAuthUser(id) {
  return (dispatch) => {
    dispatch(showLoading());

    return getAuthUsers()
      .then((users) => {
        const auth = Object.keys(users).filter(user => user === id);
        auth.length === 0 ?
          dispatch(setAuthedUser(null)) :
          dispatch(setAuthedUser(id));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function addQuestionAction (optOne, optTwo) {
  return (dispatch, getState) => {

    const { authedUser } = getState();
    dispatch(showLoading())

    saveQuestion({
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: authedUser
    }).then(question => {
      dispatch(addUserQuestion(question, authedUser))
      dispatch(addQuestion(question))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {

      const {authedUser} = getState()
      dispatch(showLoading())

      return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
          dispatch(handleInitialData())
          dispatch(hideLoading())
      })
   }
}
