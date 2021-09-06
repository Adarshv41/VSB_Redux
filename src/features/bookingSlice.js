import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
    name:"booking",
    initialState:{
        booking:null
    },

    reducers: {
        bookService :(state,action ) => {
            state.booking =action.payload;
        }
    }
})

export const { bookService } = bookingSlice.actions;

export const selectBooking = (state) => state.booking.booking;

export default bookingSlice.reducer;