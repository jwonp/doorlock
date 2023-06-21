import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {TechType} from '../../assets/models/types/TechType';

export interface CardDataState {
  id: string;
  maxSize: number;
  type: string;

  techType: TechType;

  used: boolean;
}
export interface CardState {
  cardList: CardDataState[];
  selectedCard: CardDataState;
}
const initSelectedCard: CardDataState = {
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

  used: false,

};
const initialState: CardState = {
  cardList: [initSelectedCard],
  selectedCard: initSelectedCard,
};

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<CardDataState>) => {
      state.cardList = [...state.cardList, action.payload];
    },
    setCard: (state, action: PayloadAction<CardDataState>) => {
      state.selectedCard = action.payload;
    },
    setCardId: (state, action: PayloadAction<string>) => {
      state.selectedCard.id = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {addNewCard, setCard, setCardId, } =
  card.actions;
export const getSelectedCard = (state: RootState) => state.card.selectedCard;
export const getCardList = (state: RootState) => state.card.cardList;
export default card.reducer;
