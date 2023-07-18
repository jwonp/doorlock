import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomWithReservationResponse';
import {Room} from '@/assets/models/entity/Room';

export interface RoomState {
  selectedRooms: number[];
}
interface RoomWithReservation extends RoomWithReservationResponse {}
const initRoom: Room = {
  id: 0,
  address: '',
};
const initSelectedRooms: number[] = [];

const initialState: RoomState = {
  selectedRooms: initSelectedRooms,
};

export const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    addRoomSelected: (state, action: PayloadAction<number>) => {
      state.selectedRooms = [...state.selectedRooms, action.payload];
    },
    deleteRoomSelected: (state, action: PayloadAction<number>) => {
      state.selectedRooms = state.selectedRooms.filter(
        value => value !== action.payload,
      );
    },
    resetRoomSelected: state => {
      state.selectedRooms = initSelectedRooms;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addRoomSelected, deleteRoomSelected, resetRoomSelected} =
  room.actions;
export const getSelectedRooms = (state: RootState) => state.room.selectedRooms;

export default room.reducer;
