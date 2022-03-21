import axios from "axios"
import { GET_PRODUCT_DETAILS_ERROR, GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUCCESS } from "./actionTypes"

export const getProductDetailsLoading = ()=>{
    return {
        type:GET_PRODUCT_DETAILS_LOADING
    }
}

export const getProductDetailsSuccess = (payload)=>{
    return {
        type:GET_PRODUCT_DETAILS_SUCCESS,
        payload
    }
}

export const getProductDetailsError = ()=>{
    return {
        type:GET_PRODUCT_DETAILS_ERROR
    }
}

export const gettingFunctionDetails = (id)=>(dispatch)=>{
    dispatch(getProductDetailsLoading())
    axios.get(`http://localhost:2022/products/${id}`).then(({data})=>{
        console.log("daaaaaattttttta",data)
        localStorage.setItem("data",JSON.stringify(data))
        dispatch(getProductDetailsSuccess(data))
    })
    
}