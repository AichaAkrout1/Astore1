import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const userRegister = createAsyncThunk("user/register", async (user)=>{
  try {
    let response = await axios.post("http://localhost:5000/user/register", user);
    return  response?.data;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user)=>{
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response?.data;
  } catch (error) {
    console.log(error);
  }
});

// usercurrect
// export const userCurrent = createAsyncThunk("user/currentU", async ()=>{
//   try {
//     let response = await axios.get("http://localhost:5000/user/currentU",{headers: {Authorization: localStorage.getItem("token")}})
//     console.log("wwwwwwwwwwww",response)
//     return await response?.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
      let response = await axios.get(
          "http://localhost:5000/user/current",{headers: {Authorization: localStorage.getItem("token")}})
      return await response.data
  } catch (error) {
      console.log(error)
  }
}
)

// curent

// user get
export const userget=createAsyncThunk("user/",async()=>{
  try {
     let result= axios.get("http://localhost:5000/user/")
     return result;
  } catch (error) {
      console.log(error)
  }
})
// delete user

export const userdelete = createAsyncThunk("user/delete", async (id) => {
  try {
      let response = await axios.delete(
          `http://localhost:5000/user/${id}`)
      return await response
  } catch (error) {
      console.log(error)
  }
}
)
// update
export const userupdate=createAsyncThunk('user/update',async ({id,useredit}) => {
  try {
    let result= axios.put(`http://localhost:5000/user/${id}`,useredit);
  
    return result
    
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
user: null,
users:null,
status: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
       logout:(state,action)=>{
      state.user=null;
      localStorage.removeItem("token");
    }
  },
  extraReducers:{
    [userRegister.pending]:(state)=>{
        state.status="pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
        state.status="successsss";
        state.user=action.payload?.newUserToken;
        localStorage.setItem("token",action.payload?.token)
    },
    [userRegister.rejected]:(state)=>{
        state.status="fail";
    },
    [userLogin.pending]:(state)=>{
      state.status="pending";
  },
  [userLogin.fulfilled]:(state,action)=>{
      state.status="successsss";
      state.user=action.payload?.user;
      localStorage.setItem("token",action.payload?.token)
  },
  [userLogin.rejected]:(state)=>{
      state.status="fail";
  },

  // 
//   [userCurrent.pending]:(state)=>{
//     state.status="pending";
// },
// [userCurrent.fulfilled]:(state,action)=>{
//     state.status="successsss";
//     state.user=action.payload?.user;
   
// },
// [userCurrent.rejected]:(state)=>{
//     state.status="fail";
// },
// 
// Current
       [userCurrent.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userCurrent.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload?.user;
        

    },
    [userCurrent.rejected]: (state) => {
        state.status = 'failed'


    },
// delet

[userdelete.pending]: (state) => {
  state.status = 'loading'
  
},

[userdelete.fulfilled]: (state) => {
  state.status = 'Success'
 
  

},
[userdelete.rejected]: (state) => {
  state.status = 'failed'


},
// update
[userupdate.fulfilled]: (state) => {state.status="successe"},
[userupdate.rejected]: (state) => {state.status="failed"},
[userupdate.pending]: (state) => {state.status="pending"},
// get user
[userget.pending]: (state) => {state.status="pending"},

[userget.fulfilled]: (state,action) => {
state.status="success" ;
state.users = action.payload?.data?.users;},

[userget.rejected]: (state,) => {state.status="failed"},

},


  
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer