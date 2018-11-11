import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

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
    const { classes } = this.props
    const { handleSubmit, handleChange } = this

    return (
      <form onSubmit={handleSubmit} className={classes.container}>
        <label htmlFor='message'></label>
        <input className={classes.input} name='message' value={message} onChange={handleChange} />
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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(TextBox))