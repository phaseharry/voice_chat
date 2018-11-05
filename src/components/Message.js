import React from 'react'

const Message = props => {
  const { message, user } = props
  return (
    <div>
      <p>{message}</p>
      <div>{`${user.firstName} ${user.lastName}`}</div>
    </div>
  )
}

export default Message