import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { loadMessages } from '../store/messages'

import Chat from './Chat'
import LogIn from './LogIn'

class App extends React.Component{
  componentDidMount(){
    this.props.loadMessages()
  }
  render(){
    const {} = this.props
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/login' component={LogIn}></Route>
              <Route path='/' component={Chat}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMessages: () => dispatch(loadMessages())
  }
}

export default connect(null, mapDispatchToProps)(App)