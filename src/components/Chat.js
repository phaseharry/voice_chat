import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'

class Chat extends React.Component{
  render(){
    const { messages } = this.props
    return (
      <ul>
        {messages.map(message => {
          return <Message key={message.id} message={message.message} user={message.user}/>
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { messages } = state
  return {
    messages
  }
}

export default connect(mapStateToProps, null)(Chat)