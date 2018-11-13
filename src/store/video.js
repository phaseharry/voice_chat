//action types
const RECIEVED_METADATA = 'RECIEVED_METADATA'


//action creators 
const recievedMetaData = data => ({type: RECIEVED_METADATA, data})

const videoReducer = (state = [], action) => {
  switch(action.type){
    case RECIEVED_METADATA: 
      return [...state, action.type]
    default:
      return state
  }
}

export const videoReducer