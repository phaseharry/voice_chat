import React from 'react'
import { connect } from 'react-redux'
import { postMessage } from '../store/messages'

class TextBox extends React.Component{
  constructor(){
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    const { postMessage } = this.props
    const { message } = this.state
    return postMessage(message)
    .then(this.setState({message: ''}))
  }
  render(){
    const { message } = this.state
    const { handleSubmit, handleChange } = this
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='message'></label>
        <input name='message' value={message} onChange={handleChange}></input>
        <button type='submit'>Send</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage : message => dispatch(postMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(TextBox)