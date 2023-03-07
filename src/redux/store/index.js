import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../reducers/cartReducer"
import { productsReducer, selectedProductsReducer } from "../reducers/productsReducer"

const store = configureStore({
    reducer: {
        allProducts: productsReducer,
        product: selectedProductsReducer,
        cart: cartReducer
    }
    
},
)


export default store

  