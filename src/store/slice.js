import {createSlice} from '@reduxjs/toolkit';

const defaultUserData = {
  user: ``,
  password: ``
};

const defaultClientData = {
  name: ``,
  phone: ``,
  email: ``
};

const defaultCreditData = {
  propertyValue: 2000000,
  initialFee: 0,
  creditTerm: 5,
  isMaternalCapital: false,
};

const defaultApplicationData = {
  purpose: ``,
  propertyValue: 0,
  initialFee: 0,
  creditTerm: 0,
};

const savedUserData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : defaultUserData;
const savedClientData = localStorage.getItem('client') ? JSON.parse(localStorage.getItem('client')) : defaultClientData;

const initialState = {
  userData: savedUserData,
  propertyValue: defaultCreditData.propertyValue,
  initialFee: defaultCreditData.initialFee,
  creditTerm: defaultCreditData.creditTerm,
  isMaternalCapital: defaultCreditData.isMaternalCapital,
  application: {
    number: 1,
    data: defaultApplicationData,
    clientData: savedClientData
  }
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
      state.isMaternalCapital = action.payload;
    },
    saveApplicationData(state, action) {
      state.application = {...state.application, number: state.application.number + 1, data: action.payload};
    },
    saveClientData(state, action) {
      localStorage.setItem('client', JSON.stringify(action.payload));
      state.application.clientData = action.payload;
    },

  }
});

const Reducer = ligaBankSlice.reducer;

export const {
    saveUserData,
    setPropertyValue,
    setInitialFee,
    setCreditTerm,
    setMaternalCapital,
    saveApplicationData,
    saveClientData
  } = ligaBankSlice.actions;

  export default Reducer;
