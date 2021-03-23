import { createSlice } from '@reduxjs/toolkit'

export const Add_ProductsSlice = createSlice({
    name: "Add_Products",
    initialState: [],
    reducers: {
        AddProd: (state, action) => {
            state = state.push({
                id: action.payload._id,
                name: action.payload.name,
            })
        },
        EditProd: (state, action) => {
            state = state.map((product) => {
                if (product._id == action.payload._id) {
                    return {
                        _id: action.payload._id,
                        name: action.payload.name,
                    }
                } else {
                    return {
                        ...product,
                    }
                }
            })
            return state;
        },
        RemoveProd: (state, action) => {
            state = state.filter((product) => product._id !== action.payload._id)
            return state;
        },
    }
})

export const {
    AddProd,
    EditProd,
    RemoveProd,
} = Add_ProductsSlice.actions

export const selectProduct = state => state.product
export default Add_ProductsSlice.reducer