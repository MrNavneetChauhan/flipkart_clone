import { GET_PRODUCT_DETAILS_ERROR, GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUCCESS } from "./actionTypes"

const init  = {
    loading:false,
    error:false,
    data:[]
}
export const productDetailsReducer = (store=init,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_DETAILS_SUCCESS:return {...store,loading:false,data:payload};
        case GET_PRODUCT_DETAILS_LOADING:return {...store,loading:true};
        case GET_PRODUCT_DETAILS_ERROR:return {...store,error:true};
        default:return store;
    }
}