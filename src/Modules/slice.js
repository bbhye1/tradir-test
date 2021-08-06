import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'text',
  initialState: {
    test: [],
  },
  reducers: {
    testT: (state, { payload: test }) => ({
        ...state,
        test,
    }),
  },
});

export const {
  testT,
} = actions;

export default reducer;
