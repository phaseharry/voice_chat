import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppBar, Typography, withStyles, Toolbar, Drawer } from '@material-ui/core'

import { loadMessages } from '../store/messages'
import { exchangeTokenForAuth } from '../store/auth'

import Chat from './Chat'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Nav from './Nav'
import VideoChat from './VideoChat'

class App extends React.Component{
  componentDidMount(){
    this.props.init()
  }
  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <Fragment>
            <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>
                <Typography variant='h6' color='inherit' noWrap>
                  Open Chat
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer 
              className={classes.drawer} 
              variant='permanent' 
              anchor='left' 
              classes={{paper : classes.drawerPaper}}
            >
              <div className={classes.toolbar}></div>
              <Route component={Nav}/>
            </Drawer>

            <main className={classes.content}>
              <Switch>
                <Route path='/signup' component={SignUp}/>
                <Route path='/login' component={LogIn}/>
                <Route path='/' component={Chat}/>
              </Switch>
              <Drawer 
                className={classes.drawerRight} 
                variant='permanent' 
                anchor='right' 
                classes={{paper : classes.drawerPaperRight}}
              >
              <Route path='/' component={VideoChat} />
              </Drawer>
            </main>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch(loadMessages())
      dispatch(exchangeTokenForAuth())
    }
  }
}

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerRight: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerPaperRight:{
    width: 400
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    paddingTop: '100px'
  }
})

export default withStyles(styles)(connect(null, mapDispatchToProps)(App))