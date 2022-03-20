import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";


const reducer = combineReducers({
    productReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));
