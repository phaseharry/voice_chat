import React from 'react'
import { connect } from 'react-redux'
import { withStyles, List, AppBar, Toolbar, InputBase } from '@material-ui/core'
import ReactList from 'react-list'

import Message from './Message'
import TextBox from './TextBox'

class Chat extends React.Component{
  constructor(){
    super()
    this.renderItem = this.renderItem.bind(this)
  }
  renderItem(index, key){
    const { messages } = this.props
    return <Message key={messages[index]._id} message={messages[index].text} user={messages[index].user}/>
  }
  render(){
    const { messages, classes } = this.props
    return (
      <div className={classes.root}>
        {/* <List className={classes.demo}>
        
          {messages.map(message => {
            return <Message key={message._id} message={message.text} user={message.user}/>
          })}
        </List> */}
        <List>
          <ReactList itemRenderer={this.renderItem} length={messages.length} type='uniform'/>
        </List>
        <AppBar postion='fixed' color='primary' className={classes.appBar}> 
          <Toolbar className={classes.toolbar}>
            <div></div>
            <TextBox />
            <div></div>
          </Toolbar>
        </AppBar>
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
    maxWidth: 1000,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default withStyles(styles)(connect(mapStateToProps, null)(Chat))