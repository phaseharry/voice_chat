import axios from 'axios'

//action types
export const GET_MESSAGES = 'GET_MESSAGES'

//action creators
export const _getMessages = messages => ({type: GET_MESSAGES, messages})

//thunks
export const loadMessages = () => {
  return dispatch => {
    return axios.get('/api/messages/')
    .then(response => response.data)
    .then(messages => dispatch(_getMessages(messages)))
    .catch((err) => console.log(err))
  }
}

const messagesReducer = (state = [], action) =>{
  switch(action.type){
    case GET_MESSAGES:
      return action.messages
    default:
      return state
  }
}

export default messagesReducer