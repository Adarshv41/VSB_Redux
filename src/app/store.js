import  { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bookingReducer from '../features/bookingSlice'

export default configureStore({
    reducer: {
        user:userReducer,
        booking:bookingReducer,
    }
}); 