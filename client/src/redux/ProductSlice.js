import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../utils/axiosServices/Axios';

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [], status: '', error: null },
  reducers: {
    getProducts: (state,action) => {
      state.products = action.payload
      state.status = 'fill'
      state.error = null
    },
    toggleFeaturedProduct: (state,action)=>{
        const product = state.products.find((item)=>item._id === action.payload.id)
        if (product) {
            product.featured = !product.featured;
        }
    },
    deleteProduct: (state,action) =>{
        state.products = state.products.filter((item)=> item._id !== action.payload.id)
    },
    createProdcut : (state,action) =>{
        state.products = [...state.products,action.payload]
    }
  },
});

export const { getProducts,toggleFeaturedProduct,deleteProduct,createProdcut } = productSlice.actions;
export default productSlice.reducer;
