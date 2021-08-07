import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'text',
  initialState: {
    beers: [],
  },
  reducers: {
    setBeers: (state, { payload: beers }) => ({
      ...state,
      beers,
    }),
  },
});

export const {
  setBeers,
} = actions;

export default reducer;
