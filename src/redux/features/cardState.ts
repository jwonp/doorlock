import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {TechType} from '../../assets/models/types/TechType';
import {CardWithReservationResponse} from '../../assets/models/dto/card/CardWithReservationResponse';

export interface CardDataState {
  id: string;
  maxSize: number;
  type: string;
  techType: TechType;
}
interface CardWithReservation extends CardWithReservationResponse {}
export interface CardState {
  selectedCard: CardWithReservation;
}
const initCard: CardDataState = {
  id: '',
  maxSize: 0,
  type: '',

  techType: {
    isoDep: false,
    nfcA: true,
    nfcB: false,
    nfcF: false,
    nfcV: false,
    ndef: true,
    ndefFormatable: false,
    mifareClassic: false,
    mifareUltralight: true,
  },
};

const initSelectedCard: CardWithReservation = {
  ...initCard,
  reservationId: 0,
  roomId: 0,
  userId: '',
};
const initialState: CardState = {
  selectedCard: initSelectedCard,
};

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSelectedCard: (state, action: PayloadAction<CardWithReservation>) => {
      state.selectedCard = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedCard} = card.actions;
export const getSelectedCard = (state: RootState) => state.card.selectedCard;

export default card.reducer;
