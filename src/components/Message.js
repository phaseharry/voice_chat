import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemAvatar, Avatar, ListItemText, withStyles} from '@material-ui/core'

import { getInitials } from '../store/utility'

const Message = props => {
  const { message, user, classes, userId } = props
  if(user && user._id === userId? true : false){
    // console.log(classes)
    return (
      <ListItem>
        <ListItemAvatar className={classes.myUser}>  
          <Avatar>{user? getInitials(user.name) : 'AN'}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={message}/>
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

const styles = theme => {
  // console.log(theme)
 return {
    myMessages: {
      paddingLeft: 500
    },
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth._id
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Message))
