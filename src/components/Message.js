import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, withStyles} from '@material-ui/core'

import { getInitials } from '../store/utility'

const Message = props => {
  const { message, user, classes } = props
  return (
      <ListItem>
        <ListItemAvatar> 
          <Avatar>{user? getInitials(user.name) : 'AN'}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={message} className={classes.message}/>
      </ListItem>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  message: {
    maxWidth: 500
  },
  userMessages: {
    paddingLeft: 400
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

export default withStyles(styles)(Message)
