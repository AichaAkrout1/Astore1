import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getmac = createAsyncThunk("mac/get" , async() => {try {
    let result = axios.get("http://localhost:5000/mac/");
    return result;
} 
catch (error) {
    console.log(error);
}});
export const addmac = createAsyncThunk("mac/add" , async(mac) => {try {
  let result = axios.post("http://localhost:5000/mac/add", mac);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deletemac = createAsyncThunk("mac/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/mac/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editmac = createAsyncThunk("mac/edit" , async({id,editedMac}) => {try {
  let result = axios.put( `http://localhost:5000/mac/${id}` , editedMac);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  macliste: null,
  status:null,
}

export const macSlice = createSlice({
  name: 'mac',
  initialState,
  reducers: {},
  extraReducers:{
    [getmac.fulfilled]:(state, action) => {
        state.status= "success";
        state.macliste = action.payload?.data?.mac;
    },
    [getmac.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getmac.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [addmac.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [addmac.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [addmac.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deletemac.fulfilled]:(state, action) => {
    state.status= "success";
},
[deletemac.pending]:(state, action) => {
    state.status= "pending";
    
},
[deletemac.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = macSlice.actions

export default macSlice.reducer