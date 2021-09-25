import axios from 'axios'
import {GET_APPOINTMENT} from '../constants/appointmentTypes'


export const getAppointment = ()=> async(dispatch)=>{
                    try {
                                        const res = await axios.get('/api/appointment')
                                        dispatch({type:GET_APPOINTMENT, payload:res.data.appointments})
                    } catch (error) {
                                        console.log(error)
                    }
}


export const addApointment=(newAppointment)=>async(dispatch)=>{
                    try {
                    await  axios.post('/api/appointment',newAppointment)
                    dispatch(getAppointment())
                    } catch (error) {
                                        console.log(error)
                    }
}


export const deletAppointment =(id)=>async(dispatch)=>{
                    try {
                                        await axios.delete(`/api/appointment/${id}`)
                                        dispatch(getAppointment())
                    } catch (error) {
                                        console.log(error)
                    }
}





