import { configureStore } from '@reduxjs/toolkit'
import LoadingReducer from './features/LoadingSlice'
import  productReducer from './features/productSlice'
import cartReducer from './features/cartSlice'
export const store = configureStore({
    reducer: {
        cartReducer,
        productReducer,
       LoadingReducer
        
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store