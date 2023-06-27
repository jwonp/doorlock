import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface RoomDataState {
  id: number;
address:string;
}
export interface RoomState {
  roomList: RoomDataState[];
  selectedRoom: RoomDataState;
}
const initSelectedRoom: RoomDataState = {
id:0,
address:"EXAMPLE-ADDRESS"
};
const initialState: RoomState = {
  roomList: [initSelectedRoom],
  selectedRoom: initSelectedRoom,
};

export const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    addNewRoom: (state, action: PayloadAction<RoomDataState>) => {
      state.roomList = [...state.roomList, action.payload];
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {addNewRoom} = room.actions;
export const getSelectedRoom = (state: RootState) => state.room.selectedRoom;
export const getRoomList = (state: RootState) => state.room.roomList;
export default room.reducer;
