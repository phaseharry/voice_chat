import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logIn } from '../store/auth'

class LogIn extends React.Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    const { logIn, history} = this.props
    return logIn(this.state, history)
  }
  render(){
    const { email, password } = this.state
    const { handleChange, handleSubmit } = this
    if(this.props.auth._id) return <Redirect to='/' />
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input name='email' type='email' onChange={handleChange} value={email}></input>
          <label htmlFor='password'>Password: </label>
          <input name='password' type='password' onChange={handleChange} value={password}></input>
          <button type='submit'>Log In</button>
        </form>
        <Link to='/signUp'>Sign Up</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (credentials, history) => dispatch(logIn(credentials, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)