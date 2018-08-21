import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}


//
// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }
//
// export function saveTweet (info) {
//   return _saveTweet(info)
// }
