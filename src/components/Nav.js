import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { Divider, Button, List, ListItem, ListItemText, Badge, withStyles } from '@material-ui/core'
import {logOut} from '../store/auth'

class Nav extends React.Component{
  render(){
    const { auth, history, logOut } = this.props
    return (
      <Fragment>
        <Divider/>
        <List>
            <ListItem>
              <Button component={Link} to='/'>Open Chat</Button>
            </ListItem>
          { auth._id? 
              <ListItem> 
                <Button onClick={() => logOut(history)}>Log out</Button>
              </ListItem> : 
              <ListItem>
                <Button component={Link} to='/login'>Log In</Button>
              </ListItem>
          }
        </List>
      </Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {  
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: (history) => dispatch(logOut(history))
  }
}


const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav)))