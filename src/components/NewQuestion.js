import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleOptionOneChange = (e) => {
    const optOne = e.target.value

    this.setState(() => ({
      optionOne: optOne,
    }))
  }

  handleOptionTwoChange = (e) => {
    const optTwo = e.target.value

    this.setState(() => ({
      optionTwo: optTwo,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: id ? false : true,
    }))
  }

  render() {

    const { optionOne, optionTwo, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>

        <h2 className='center'>Add a new question</h2>
        <h4 className='center'>Would you rather...?</h4>

        <form className='new-tweet' onSubmit={this.handleSubmit}>

          <textarea
            placeholder="Option 1"
            value={optionOne}
            onChange={this.handleOptionOneChange}
            className='textarea1'
          />

          <textarea
            placeholder="Option 2"
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
            className='textarea2'
          />

          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' && optionTwo === ''}>
              Submit
          </button>
        </form>
      </div>
    )


  }
}

export default connect()(NewQuestion)
