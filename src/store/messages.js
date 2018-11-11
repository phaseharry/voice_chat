import axios from 'axios'
import socket from '../index'

//action types
const GET_MESSAGES = 'GET_MESSAGES'
const POST_MESSAGE = 'POST_MESSAGE'

//action creators
export const _getMessages = messages => ({type: GET_MESSAGES, messages})
export const _postMessage = message => ({type: POST_MESSAGE, message})

//thunks
export const loadMessages = () => {
  return dispatch => {
    return axios.get('/api/messages/')
    .then(response => response.data)
    .then(messages => {
      const sortedMessages = messages.sort((a,b) => a._id - b._id)
      dispatch(_getMessages(sortedMessages))
    })
    .catch((err) => console.log(err))
  }
}

export const postMessage = message => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth._id
      const response = await axios.post('/api/messages/', {message, userId})
      dispatch(_postMessage(response.data))
      socket.emit('new-message', response.data)
    } catch(err){
      console.log(err)
    }
  }
}

const messagesReducer = (state = [], action) => {
  switch(action.type){
    case POST_MESSAGE:
      return [...state, action.message]
    case GET_MESSAGES:
      return action.messages
    default:
      return state
  }
}

export default messagesReducer