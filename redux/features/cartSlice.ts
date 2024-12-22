import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
    id: string,
    title: string,
    img: string,
    price: number,
    quantity: number
}
const initialState: Array<Product> = []

 export  const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((pro) => {
                    return pro.id === action.payload.id ? { ...pro, quantity: pro.quantity + 1 } : pro;
                })
            }

        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            return state.filter((pro) => pro.id !== action.payload)
            
        }
    }
})
    
    export const { addToCart,removeProductFromCart } = cartSlice.actions
    export default cartSlice.reducer