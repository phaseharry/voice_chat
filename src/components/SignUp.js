import React from 'react'
import { signUp } from '../store/auth'
import { connect } from 'react-redux';

class SignUp extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
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
    const { signUp, history } = this.props
    const { firstName, lastName, password, email } = this.state
    const name = `${firstName} ${lastName}`
    return signUp({name, password, email}, history)
  
  }
  render(){
    const { firstName, lastName, email, password } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name: </label>
        <input name='firstName' value={firstName} onChange={handleChange}></input>
        <label htmlFor='lastName'>Last name: </label>
        <input name='lastName' value={lastName} onChange={handleChange}></input>
        <label htmlFor='email'>Email: </label>
        <input name='email' type='email' value={email} onChange={handleChange}></input>
        <label htmlFor='password'>Password: </label>
        <input name='password' type='password' value={password} onChange={handleChange}></input>
        <button type='submit'>Sign up!</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp : (userInfo, history) => dispatch(signUp(userInfo, history))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)