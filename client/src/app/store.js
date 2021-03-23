import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/User/UserSlice'
import { Add_ProductsSlice } from 'features/Product/ProductsSlice'

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        product: Add_ProductsSlice.reducer,
    }
})