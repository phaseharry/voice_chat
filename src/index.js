import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { CssBaseline } from '@material-ui/core'

import App from './components/App'
import store from './store'
import { _postMessage } from './store/messages'

// const socket = io(window.location.origin)


// export default socket

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <CssBaseline />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('app')
)
