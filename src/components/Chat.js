import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'
import TextBox from './TextBox'

class Chat extends React.Component{
  render(){
    const { messages } = this.props
    return (
      <div>
        <ul>
          {messages.map(message => {
            return <Message key={message.id} message={message.message} user={message.user}/>
          })}
        </ul>
        <TextBox />
      </div>
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