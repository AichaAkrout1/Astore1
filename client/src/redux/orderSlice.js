import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getorder = createAsyncThunk("order/get" , async() => {try {
    let result = axios.get("http://localhost:5000/order/");
    return result;
} 
catch (error) {
    console.log(error);
}});
export const addorder = createAsyncThunk("order/add" , async(order) => {try {
  let result = axios.post("http://localhost:5000/order/add", order);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deleteorder = createAsyncThunk("order/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/order/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editorder = createAsyncThunk("order/edit" , async({id,editedOrder}) => {try {
  let result = axios.put( `http://localhost:5000/order/${id}` , editedOrder);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  orderliste: null,
  status:null,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers:{
    [getorder.fulfilled]:(state, action) => {
        state.status= "success";
        state.orderliste = action.payload?.data?.order;
    },
    [getorder.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getorder.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [addorder.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [addorder.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [addorder.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deleteorder.fulfilled]:(state, action) => {
    state.status= "success";
},
[deleteorder.pending]:(state, action) => {
    state.status= "pending";
    
},
[deleteorder.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { addProduct } = orderSlice.actions

export default orderSlice.reducer