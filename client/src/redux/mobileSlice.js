import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getmobile = createAsyncThunk("mobile/get" , async() => {try {
    let result = axios.get("http://localhost:5000/mobile/");
    return result;
} 
catch (error) {
    console.log(error);
}});
export const addmobile = createAsyncThunk("mobile/add" , async(mobile) => {try {
  let result = axios.post("http://localhost:5000/mobile/add", mobile);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deletemobile = createAsyncThunk("mobile/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/mobile/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editmobile = createAsyncThunk("mobile/edit" , async({id,edited}) => {try {
  let result = axios.put( `http://localhost:5000/mobile/${id}` , edited);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  mobileliste: null,
  status:null,
}

export const mobileslice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {},
  extraReducers:{
    [getmobile.fulfilled]:(state, action) => {
        state.status= "success";
        state.mobileliste = action.payload?.data?.mobile;
    },
    [getmobile.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getmobile.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [addmobile.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [addmobile.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [addmobile.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deletemobile.fulfilled]:(state, action) => {
    state.status= "success";
},
[deletemobile.pending]:(state, action) => {
    state.status= "pending";
    
},
[deletemobile.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = mobileslice.actions

export default mobileslice.reducer