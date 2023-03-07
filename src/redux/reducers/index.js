import { combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartReducer"
import { productsReducer, selectedProductsReducer } from "./productsReducer"

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    cart: cartReducer

})

export default reducers