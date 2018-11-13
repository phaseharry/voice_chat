import React from 'react'
import init from '../stream'

class VideoChat extends React.Component{
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  render(){
    const { open } = this.state
    return (
      <div>
        <div style={
          {paddingBottom: 100}
        }></div>
        <video id='vidChat' autoPlay playsInline height='200' width='200'></video>
        <video id='vidChat2' autoPlay playsInline height='200' width='200'></video>
        {!open? <button onClick={(e) => {
          this.setState({open: true})
          init(e)
        }}>Open Video</button> : null}
      </div>
    )
  }
}


export default VideoChat