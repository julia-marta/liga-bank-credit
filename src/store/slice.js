import {createSlice} from '@reduxjs/toolkit';

const defaultUserData = {
  user: ``,
  password: ``
}

const savedUserData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : defaultUserData;

const initialState = {
  userData: savedUserData,
};

const ligaBankSlice = createSlice({
  name: 'liga-bank',
  initialState,
  reducers: {
    saveUserData(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.userData = action.payload;
    },
  }
});

const Reducer = ligaBankSlice.reducer;

export const {saveUserData} = ligaBankSlice.actions;
export default Reducer;
