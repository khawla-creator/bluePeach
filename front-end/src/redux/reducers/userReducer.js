import {LOAD_USER, REGISTER_USER, LOGIN_USER, FAIL_USER, CURRENT_USER, LOGOUT, VIDE_ERRORS,GET_USERS} from '../constants/usersTypes'


const initState={
                    user:null,
                    errors:null,
                    isUser:false,
                    load:false,
                    users:[]
                    }
                    const userReducer=(state=initState,action)=>{
                                        const {type,payload}=action
                    switch (type) {
                                        case LOAD_USER:
                                        return {
                                        ...state,load:true
                                        }
                                        case REGISTER_USER:
                                        case LOGIN_USER:
                                        localStorage.setItem("token",payload.token)
                                        return {
                                        ...state,user:payload.user,load:false,isUser:true
                                        }
                                        case FAIL_USER:
                                        return {
                                        ...state,errors:payload.errors,load:false
                                        }
                                        case CURRENT_USER:
                                        return {
                                        ...state,user:payload.user,isUser:true
                                        }
                                        case LOGOUT:
                                        localStorage.removeItem('token')
                                        return {
                                        ...state,user:null,isUser:false
                                        }
                                        case VIDE_ERRORS:
                                        return {
                                        ...state,errors:null
                                        }
                                        case GET_USERS: 
                                        return {...state,users:payload}
                                        default : 
                                        return state
                    }
}

export default userReducer;


