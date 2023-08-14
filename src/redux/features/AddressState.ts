import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store';

export interface AddressState {
  address: string;
}

const initAddress: string = '';

const initialState: AddressState = {
  address: initAddress,
};

export const address = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },

    resetAddress: state => {
      state.address = initialState.address;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAddress, resetAddress} = address.actions;
export const getAddress = (state: RootState) => state.address.address;

export default address.reducer;
