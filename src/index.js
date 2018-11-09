import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

import App from './components/App'
import store from './store'
import { _postMessage } from './store/messages'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log(socket.id, 'has made a connection ')
  socket.on('new-message', message => {
    store.dispatch(_postMessage(message))
  })
})

export default socket

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
