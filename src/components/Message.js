import React from 'react'

const Message = props => {
  const { message, user } = props
  return (
    <div>
      <p>{message}</p>
      <div>{user? user.firstName : 'Anonymous User'}</div>
    </div>
  )
}

export default Message