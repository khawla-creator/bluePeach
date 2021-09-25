import { GET_PRODUCT, DELETE_PRODUCT } from './../constants/productTypes';


const initialState= {
                    product:[]
}

const productReducer=(state=initialState,action)=>{
                    switch(action.type){
                                        case GET_PRODUCT : 
                                        return {...state,product:[...state.product,action.payload]}
                                        case DELETE_PRODUCT : 
                                        return {...state,product:state.product.filter(e=>e._id!==action.payload)}
                                        default : 
                                        return state
                    }
                    
}
export default productReducer