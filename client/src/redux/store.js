import { configureStore } from '@reduxjs/toolkit'
import  mobileslice  from './mobileSlice';
import userSlice from './userSlice';
import macSlice from './macSlice';
import orderSlice from './orderSlice';


export const store = configureStore({
  reducer: {
    mobile: mobileslice,
    user: userSlice,
    mac: macSlice,
    order: orderSlice,
  },
})