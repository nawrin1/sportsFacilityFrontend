import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';





type TBookingState = {
  facilityId: null| string;
  facilityImage:null|string;
  facilityName:null|number;
  UserName:null|string;
  UserEmail:null|string;
  startTime: null| string;
  date:  null|string;
  endTime: null|string;
  price:null|number;
};

const initialState: TBookingState = {
    facilityId:  null,
    facilityImage:null,
    facilityName:null,
    UserName:null,
    UserEmail:null,
    startTime:  null,
    date:  null,
    endTime:  null,
    price:null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      
      state.facilityId = action.payload.facilityId;
      state.facilityImage=action.payload.facilityImage,
      state.facilityName=action.payload.facilityName,
      state.UserName=action.payload.UserName,
      state.UserEmail=action.payload.UserEmail,
      state.startTime=action.payload.startTime,
      state.date=action.payload.date,
      state.endTime=action.payload.endTime,
      state.price=action.payload.price
      
    },
    
  },
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
export const useBookingInfo = (state: RootState) => state.booking;


