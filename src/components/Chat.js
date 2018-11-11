import React from 'react'
import { connect } from 'react-redux'
import { withStyles, List } from '@material-ui/core'
// import ScrollArea from 'react-scrollbar'

import Message from './Message'
import TextBox from './TextBox'

class Chat extends React.Component{
  render(){
    const { messages, classes } = this.props
    return (
      <div className={classes.root}>
        <List className={classes.demo}>
          {messages.map(message => {
            return <Message key={message._id} message={message.text} user={message.user}/>
          })}
        </List>
        <TextBox className={classes.textBox}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { messages } = state
  return {
    messages
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    maxHeight: 300
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  textBox: {
    top: 'auto',
    bottom: 0
  }
});

export default withStyles(styles)(connect(mapStateToProps, null)(Chat))