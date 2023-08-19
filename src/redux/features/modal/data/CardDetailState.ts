import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {CardWithReservationResponse} from '@/assets/models/dto/card/CardResponse';
import {act} from 'react-test-renderer';

export interface CardWithReservation extends CardWithReservationResponse {}

const initialState: CardWithReservation = {
  reservationId: 0,
  userId: '',
  roomId: 0,
  id: '',
  maxSize: 0,
  type: '',
  techType: {
    isoDep: false,
    nfcA: false,
    nfcB: false,
    nfcF: false,
    nfcV: false,
    ndef: false,
    ndefFormatable: false,
    mifareClassic: false,
    mifareUltralight: false,
  },
  lastTagged: '',
};

export const cardDetail = createSlice({
  name: 'cardDetail',
  initialState,
  reducers: {
    setCardDetail: (state, action: PayloadAction<CardWithReservation>) => {
      state.id = action.payload.id;
      state.maxSize = action.payload.maxSize;
      state.reservationId = action.payload.reservationId;
      state.roomId = action.payload.roomId;
      state.techType = action.payload.techType;
      state.type = action.payload.type;
      state.userId = action.payload.userId;
      state.lastTagged = action.payload.lastTagged;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCardDetail} = cardDetail.actions;
export const getCardDetail = (state: RootState) => state.cardDetail;

export default cardDetail.reducer;
