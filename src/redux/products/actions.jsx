import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes";

export const getProductsLoading = ()=>{
    return {
        type:GET_PRODUCTS_LOADING
    }
}

export const getProductSuccess = (payload)=>{
    return {
        type:GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsError = ()=>{
    return {
        type:GET_PRODUCTS_ERROR
    }
}


export const gettingFunction = ()=>(dispatch)=>{
    dispatch(getProductsLoading())
    axios.get("http://localhost:2022/products").then(({data})=>{
    console.log(data)
    dispatch(getProductSuccess(data))
    })
}