import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomResponse';

export interface RoomDetailState extends RoomWithReservationResponse {}

const initialState: RoomDetailState = {
  id: 0,
  address: '',
  reservations: [],
};

export const roomDetail = createSlice({
  name: 'roomDetail',
  initialState,
  reducers: {
    setRoomDetail: (state, action: PayloadAction<RoomDetailState>) => {
      state.id = action.payload.id;
      state.address = action.payload.address;
      state.reservations = action.payload.reservations;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRoomDetail} = roomDetail.actions;
export const getRoomDetail = (state: RootState) => state.roomDetail;

export default roomDetail.reducer;
