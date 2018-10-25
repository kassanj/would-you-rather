let users = {
  kassandra: {
    id: 'kassandra',
    name: 'Kassandra Meyer',
    role: 'Full Stack Engineer',
    quote: 'But first, coffee.',
    avatarURL: 'https://whereby.us/wp-content/uploads/2018/01/KassandraMeyer.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  margaret: {
    id: 'margaret',
    name: 'Margaret Hamilton',
    role: 'Computer Scientist',
    quote: "Learning was by 'being' and 'doing' on the job.",
    avatarURL: 'https://cdn.vox-cdn.com/thumbor/ERQrpoAInp9fMlC2n_J9-7klaiE=/86x0:716x473/1400x1400/filters:focal(86x0:716x473):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46431942/Margaret_Hamilton_in_action.0.0.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  ada: {
    id: 'ada',
    name: 'Ada Lovelace',
    role: 'Mathematician, Writer',
    quote: 'If you can\'t give me poetry, can\'t you give me poetical science?',
    avatarURL: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg',
    answers: {},
    questions: [],
  },
  jean: {
    id: 'jean',
    name: 'Jean Sammet',
    role: 'Software Engineer, Designer of COBOL',
    quote: 'I served for three years as president of the Computer Club!',
    avatarURL: 'https://cacm.acm.org/system/assets/0002/7071/041717__Ben_Shneiderman_Sammet.large.jpeg?1492457307&1492457307',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  hedy: {
    id: 'hedy',
    name: 'Hedy Lamarr',
    role: 'Inventor, Actress',
    quote: 'Improving things comes naturally to me.',
    avatarURL: 'https://www.womenshistory.org/sites/default/files/styles/4_up_card/public/images/2018-09/Lamarr%20square.jpg?itok=gfMOSbgq',
    answers: {},
    questions: [],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'kassandra',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['kassandra'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'jean',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['jean', 'kassandra'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'kassandra',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['kassandra'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'margaret',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['kassandra'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'margaret',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['margaret'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['jean'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'jean',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['jean'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['margaret'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: users[author].id,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {

    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
       ...users,
       [authedUser]: {
         ...users[authedUser],
         questions: users[authedUser].questions.concat([formattedQuestion.id])
       }
     }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {

  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }
      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
