import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomWithReservationResponse';
import {Room} from '@/assets/models/entity/Room';

export interface RoomState {
  selectedRoom: RoomWithReservation;
}
interface RoomWithReservation extends RoomWithReservationResponse {}
const initRoom: Room = {
  id: 0,
  address: '',
};
const initSelectedRoom: RoomWithReservation = {
  ...initRoom,
  reservations: [],
};

const initialState: RoomState = {
  selectedRoom: initSelectedRoom,
};

export const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setSelectedRoom: (state, action: PayloadAction<RoomWithReservation>) => {
      state.selectedRoom = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedRoom} = room.actions;
export const getSelectedRoom = (state: RootState) => state.room.selectedRoom;

export default room.reducer;
