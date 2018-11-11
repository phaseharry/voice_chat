import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemAvatar, Avatar, ListItemText, withStyles} from '@material-ui/core'

import { getInitials } from '../store/utility'

const Message = props => {
  const { message, user, classes, userId } = props
  if(user && user._id === userId? true : false){
    return (
      <ListItem>
        <ListItemText primary={message} className={classes.myMessages}/>
        {/* <ListItemAvatar>   */}
          <Avatar>{user? getInitials(user.name) : 'AN'}</Avatar>
        {/* </ListItemAvatar> */}
      </ListItem>
    )
  }
  return (
      <ListItem>
        <ListItemAvatar> 
          <Avatar>{user? getInitials(user.name) : 'AN'}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={message}/>
      </ListItem>
  )
}

const styles = theme => ({
  message: {
    maxWidth: 500
  },
  userMessages: {
    paddingLeft: 200
  },
  myMessages: {
    paddingLeft: 200
  },
});

const mapStateToProps = state => {
  return {
    userId: state.auth._id
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Message))
