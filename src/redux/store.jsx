import { applyMiddleware, combineReducers,createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import { productDetailsReducer } from "./productDetails/reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
    productReducer,
    productDetailsReducer
})

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
console.log("store",store.getState())

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()