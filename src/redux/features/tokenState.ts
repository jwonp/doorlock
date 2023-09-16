import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store';

export interface TokenState {
  token: string;
}

const initToken: string = '';

const initialState: TokenState = {
  token: initToken,
};

export const token = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    resetToken: state => {
      state.token = initialState.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setToken, resetToken} = token.actions;
export const getToken = (state: RootState) => state.token.token;

export default token.reducer;
