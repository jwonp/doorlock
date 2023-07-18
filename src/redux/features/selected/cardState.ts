import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {TechType} from '@/assets/models/types/TechType';
import {CardWithReservationResponse} from '@/assets/models/dto/card/CardWithReservationResponse';

export interface CardDataState {
  id: string;
  maxSize: number;
  type: string;
  techType: TechType;
}
interface CardWithReservation extends CardWithReservationResponse {}
export interface CardState {
  selectedCards: string[];
}
const initCard: CardDataState = {
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
};

const initSelectedCards: string[] = [];
const initialState: CardState = {
  selectedCards: initSelectedCards,
};

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCardSelected: (state, action: PayloadAction<string>) => {
      state.selectedCards = [...state.selectedCards, action.payload];
    },
    deleteCardSelected: (state, action: PayloadAction<string>) => {
      state.selectedCards = state.selectedCards.filter(
        value => value !== action.payload,
      );
    },
    resetCardSelected: state => {
      state.selectedCards = initSelectedCards;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCardSelected, deleteCardSelected, resetCardSelected} =
  card.actions;
export const getSelectedCards = (state: RootState) => state.card.selectedCards;

export default card.reducer;
