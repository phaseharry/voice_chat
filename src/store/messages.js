import axios from 'axios'

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
    .then(messages => dispatch(_getMessages(messages)))
    .catch((err) => console.log(err))
  }
}

export const postMessage = (message) => {
  console.log(message)
  return dispatch => {
    return axios.post('/api/messages/', { message })
    .then(response => response.data)
    .then(message => dispatch(_postMessage(message)))
  }
}


const messagesReducer = (state = [], action) =>{
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