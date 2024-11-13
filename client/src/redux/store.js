import { configureStore } from '@reduxjs/toolkit'
import userSlice from './UserSlice.js'
import productSlice from './ProductSlice.js'

export const store = configureStore({
  reducer: {
    user : userSlice,
    product : productSlice
},
})