import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addQuestionAction } from '../actions/shared'
import TextField from '@material-ui/core/TextField';


class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleChange = function(event, optionIndex) {
    const text = event.target.value;

    this.setState(function(previousState) {
      return optionIndex === 1
        ? { ...previousState, 'optionOne': text }
        : { ...previousState, 'optionTwo': text };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch, id } = this.props

    dispatch(addQuestionAction(optionOne, optionTwo))

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
      
      <div style={{paddingTop: 15}}>
        <h2 className='center'>Add a new question</h2>
        <h4 className='center'>Would you rather...?</h4>

        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <div>
          <span className='option-input'>
            <TextField
               id="outlined-multiline-flexible"
               label="Option One"
               multiline
               rowsMax="4"
               value={optionOne}
               onChange={(event) => this.handleChange(event, 1)}
               className='textarea1'
               margin="normal"
               variant="outlined"
             />
           </span>
           <span className='option-input'>
             <TextField
                id="outlined-multiline-flexible"
                label="Option Two"
                multiline
                rowsMax="4"
                value={optionTwo}
                onChange={(event) => this.handleChange(event, 2)}
                className='textarea2'
                margin="normal"
                variant="outlined"
              />
            </span>
          </div>
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
