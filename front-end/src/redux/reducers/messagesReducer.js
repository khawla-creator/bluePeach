import { GET_MESSAGES } from './../constants/messagesTypes';


const initialState= { 
                    messages:[]
}

const messagesReducer=(state=initialState,action)=>{
                    switch(action.type){
                                        case GET_MESSAGES: 
                                        return {...state,messages:action.payload}
                                        
                                        default : 
                                        return state
                    }
                    
}
export default messagesReducer