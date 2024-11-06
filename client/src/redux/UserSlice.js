import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axios';  



export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axiosInstance.get('/user')
    return response.data
  });

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: '', error: null },
  reducers: {
    resetUser: (state) => {
      state.user = null
      state.status = ''
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
      state.status = 'loading' 
    })

    .addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.user = action.payload
    })

    .addCase(fetchUser.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    });
    
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
