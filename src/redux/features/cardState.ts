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
  cardList: CardDataState[];
  selectedCard: CardWithReservation;
}
const initCard: CardDataState = {
  id: 'EXAMPLE-ID',
  maxSize: 1000,
  type: 'EXAMPLE-TYPE',

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
  userId: 'EXAMPLE-USER-ID',
};
const initialState: CardState = {
  cardList: [initCard],
  selectedCard: initSelectedCard,
};

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<CardDataState>) => {
      state.cardList = [...state.cardList, action.payload];
    },
    setSelectedCard: (state, action: PayloadAction<CardWithReservation>) => {
      state.selectedCard = action.payload;
    },
    setCardId: (state, action: PayloadAction<string>) => {
      state.selectedCard.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewCard, setSelectedCard, setCardId} = card.actions;
export const getSelectedCard = (state: RootState) => state.card.selectedCard;
export const getCardList = (state: RootState) => state.card.cardList;
export default card.reducer;
