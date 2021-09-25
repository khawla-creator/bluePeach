import React from 'react';
import  {Title,DIV} from '../Users/AdminUsers';
import CardAppointment from './CardAppointment';
import { useSelector } from 'react-redux';

 
function AdminAppointment(){
                    const appointments = useSelector(state =>state.appointmentReducer.appointments)
                    return (
                                        <div >
                                        <Title > APPOINTMENTS LIST </Title>
                                        <DIV>
                                        {
                                                            appointments.map(appointment=><CardAppointment
                                                                                appointment={appointment}
                                                                                key={appointment._id}
                                                            />)
                                        }
                                        </DIV>  
                                        </div>
                    )
}
export default AdminAppointment;   