import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes"

const init = {
    loading:false,
    error:false,
    data:[]
}

export const productReducer = (store=init,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_LOADING:return {...store,loading:true};
        case GET_PRODUCTS_SUCCESS:return {...store,loading:false,data:payload}
        case GET_PRODUCTS_ERROR:return {...store,error:true};

        default:return store;
        
    }
}