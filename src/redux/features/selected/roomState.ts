import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store';
export interface RoomState {
  selectedRooms: number[];
}
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
