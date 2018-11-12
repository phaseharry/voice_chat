import React from 'react'
import { withStyles } from '@material-ui/core'
import init from '../stream'

class VideoChat extends React.Component{
  constructor(){
    super()
    this.state = {
      numberOfUsers: 0
    }
  }
  render(){
    console.log('mounted')
    return (
      <div>
        <video id='vidChat' autoPlay playsInline></video>
        <button onClick={init}>Open Video</button>
      </div>
    )
  }
}


export default VideoChat