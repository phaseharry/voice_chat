import axios from 'axios'

//action types
const SET_AUTH = 'SET_AUTH'
const LOG_OUT = 'LOG_OUT'

//action creator 
const _setAuth = auth => ({type: SET_AUTH, auth})
const _logOut = () => ({type: LOG_OUT})

export const exchangeTokenForAuth = history => {
  return dispatch => {
    const token = window.localStorage.getItem('token')
    if(!token){
      return
    }
    return axios.get('/api/auth', {
      headers: {
        authorization: token
      }
    })
    .then(response => response.data)
    .then(auth => {
        dispatch(_setAuth(auth))
        history.push('/')
    })
    .catch(err => {
      console.log(err)
      window.localStorage.removeItem('token')
    })
  }
}

export const logIn = (credentials, history) => {
  return async dispatch => {
    const response = await axios.post('/api/auth', credentials)
    window.localStorage.setItem('token', response.data.token)
    return dispatch(exchangeTokenForAuth(history))
  }
}

export const logOut = history => {
  return dispatch => {
    window.localStorage.removeItem('token')
    dispatch(_logOut())
    history.push('/')
  }
}

export const signUp = (userInfo, history) => {
  return dispatch => {
    return axios.post('/api/auth/create', userInfo)
    .then(user => {
      const { email, password } = user.data
      dispatch(logIn({ email, password }, history))
    })
    .catch((err) => console.log(err))
  }
}

// const initialState = {
//   "_id": 4,
//   "createdAt": "2018-11-10T19:55:29.850Z",
//   "email": "mike@gmail.com",
//   "name": "Mikey Smikey",
//   "password": "mike", 
//   "updatedAt": "2018-11-10T19:55:29.850Z",
// }

const authReducer = (state = {}, action) => {
  switch(action.type){
    case LOG_OUT:
      return {}
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}

export default authReducer