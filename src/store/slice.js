import {createSlice} from '@reduxjs/toolkit';

const defaultUserData = {
  user: ``,
  password: ``
};

const defaultCreditData = {
  propertyValue: 2000000,
  initialFee: 0,
  creditTerm: 5,
  maternalCapital: 0,
};

const savedUserData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : defaultUserData;

const initialState = {
  userData: savedUserData,
  propertyValue: defaultCreditData.propertyValue,
  initialFee: defaultCreditData.initialFee,
  creditTerm: defaultCreditData.creditTerm,
  maternalCapital: defaultCreditData.maternalCapital,
};

const ligaBankSlice = createSlice({
  name: 'liga-bank',
  initialState,
  reducers: {
    saveUserData(state, action) {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.userData = action.payload;
    },
    setPropertyValue(state, action) {
      state.propertyValue = action.payload;
    },
    setInitialFee(state, action) {
      state.initialFee = action.payload;
    },
    setCreditTerm(state, action) {
      state.creditTerm = action.payload;
    },
    setMaternalCapital(state, action) {
      state.maternalCapital = action.payload;
    },

  }
});

const Reducer = ligaBankSlice.reducer;

export const {saveUserData, setPropertyValue, setInitialFee, setCreditTerm, setMaternalCapital} = ligaBankSlice.actions;
export default Reducer;
