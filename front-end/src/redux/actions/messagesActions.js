import axios from 'axios'
import {GET_MESSAGES} from '../constants/messagesTypes'


export const getMessages =()=> async(dispatch)=>{
                    try {
                                        const res = await axios.get('/api/contactUs')
                                        dispatch({type:GET_MESSAGES, payload:res.data.messages})
                    } catch (error) {
                                        console.log(error)
                    }
}


export const addMessage=(newMessage)=>async(dispatch)=>{
                    try {
                    await  axios.post('/api/contactUs',newMessage)
                    dispatch(getMessages())
                    } catch (error) {
                                        console.log(error)
                    }
}


export const deleteMessage =(id)=>async(dispatch)=>{
                    try {
                                        await axios.delete(`/api/contactUs/${id}`)
                                        dispatch(getMessages())
                    } catch (error) {
                                        console.log(error)
                    }
}

