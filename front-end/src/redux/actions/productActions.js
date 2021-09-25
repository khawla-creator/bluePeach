
import { GET_PRODUCT,DELETE_PRODUCT } from './../constants/productTypes';


export const getProduct = (payload)=>{

           return   {type:GET_PRODUCT,
                     payload
}
}

export const deleteProduct = (id)=>{

                    return   {type:DELETE_PRODUCT,
                              payload:id
         }
         }