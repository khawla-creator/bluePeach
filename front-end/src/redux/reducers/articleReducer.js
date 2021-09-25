import { GET_ARTICLES,GET_ARTICLE } from './../constants/articlesTypes';


const initialState= {
                    articles:[],
                    article:{}
}

const articleReducer=(state=initialState,action)=>{
                    switch(action.type){
                                        case GET_ARTICLES: 
                                        return {...state,articles:action.payload}
                                        case  GET_ARTICLE:
                                        return {...state,article:action.payload}
                                        default : 
                                        return state
                    }
                    
}
export default articleReducer