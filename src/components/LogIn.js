import React from 'react'
import { Link } from 'react-router-dom'

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
    console.log(this.state)
  }
  render(){
    const { email, password } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input name='email' onChange={handleChange} value={email}></input>
          <label htmlFor='password'>Password: </label>
          <input name='password' type='password' onChange={handleChange} value={password}></input>
          <button type='submit'>Log In</button>
        </form>
        <Link to='/signUp'>Sign Up</Link>
      </div>
    )
  }
}

export default LogIn