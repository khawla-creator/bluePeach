import axios from "axios";
import {LOAD_USER, REGISTER_USER, FAIL_USER, LOGIN_USER,CURRENT_USER, LOGOUT, VIDE_ERRORS, GET_USERS} from '../constants/usersTypes'
//GET_USERS


// add user : signup : register


export const register=(user,history)=>async(dispatch)=>{
                    dispatch({type:LOAD_USER})
                    try {
                                        const res=await axios.post('/api/user/signup',user)
                                        dispatch({type:REGISTER_USER,payload:res.data})
                                        history.push('/profile')
                                        
                    } catch (error) {
                                        // error.response.data.errors.map(el=>alert(el.msg))
                                        dispatch({type:FAIL_USER, payload:error.response.data})
                                        
                    }
                    
}

// login : signin
export const login=(user,history)=>async(dispatch)=>{ 
                    dispatch({type:LOAD_USER})

                    try{
                                        const res = await axios.post('/api/user/signin',user)
                                        dispatch({type:LOGIN_USER, payload:res.data})
                                        if(res.data.user.role===1){
                                                            history.push('/adminDashboard')
                                        } else {
                                                            history.push('/profile')
                                        } 
                                        
                    
                    }catch(error){
                                        dispatch({type:FAIL_USER, payload:error.response.data})
                    }

}

//current user 
export const current=()=>async(dispatch)=>{
                                        const config={
                                        headers:{
                                        authorization:localStorage.getItem('token')
                                        }
                                        }
                                        try {
                                        const res=await axios.get('/api/user/current',config)
                                        console.log(res.data)
                                        dispatch({type:CURRENT_USER,payload:res.data})
                                        } catch (error) {
                                        dispatch({type:FAIL_USER,payload:error.response.data})
                                        }
                    }


// logout 
export const logout=()=>{ 
return {
                    type:LOGOUT 
                    
}
}

//  videError
export const videError=()=>{    
return {
                    type:VIDE_ERRORS
}
}



export const getUsers=()=>async(dispatch)=>{
                    try {
                                        const res = await axios.get('/api/user')
                                        dispatch({type:GET_USERS, payload:res.data.users})
                                        console.log(res)
                                        
                    } catch (error) {
                                        console.log(error)
                    }
}


export const deleteUser = (id)=>async(dispatch)=>{
                    try {
                                        await axios.delete(`/api/user/${id}`)
                                        dispatch(getUsers())
                    } catch (error) {
                                        console.log(error)
                    }
}
