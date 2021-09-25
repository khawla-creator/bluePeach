import React from 'react'
import CardContactUs from './CardContactUs';
import  {Title,DIV} from '../Users/AdminUsers';
import { useSelector } from 'react-redux';


function AdminContacts(){
                    const messages = useSelector(state =>state.messagesReducer.messages)
                    return (
                                        <div >
                                        <Title > MESSAGES LIST </Title>
                                                            <DIV>
                                                            {
                                                                                messages.map(message=>
                                                                                                    <CardContactUs
                                                                                                                        message={message}
                                                                                                                        key={message._id}
                                                                                                    />
                                                                                )
                                                            }
                                                            </DIV>
                                        </div>
                                        
                    )
}
export default AdminContacts;