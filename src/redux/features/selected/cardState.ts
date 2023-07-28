import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {TechType} from '@/assets/models/types/TechType';

export interface CardDataState {
  id: string;
  maxSize: number;
  type: string;
  techType: TechType;
}

export interface CardState {
  selectedCards: string[];
}

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
