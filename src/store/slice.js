import {createSlice} from '@reduxjs/toolkit';

const defaultUserData = {
  login: ``,
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

const savedUserData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : defaultUserData;
const savedClientData = localStorage.getItem('client') ? JSON.parse(localStorage.getItem('client')) : defaultClientData;

const initialState = {
  userData: savedUserData,
  creditData: defaultCreditData,
  clientData: savedClientData,
  currentApplicationNumber: 1,
  applications: []
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
      state.creditData.propertyValue = action.payload;
    },
    setInitialFee(state, action) {
      state.creditData.initialFee = action.payload;
    },
    setCreditTerm(state, action) {
      state.creditData.creditTerm = action.payload;
    },
    setMaternalCapital(state, action) {
      state.creditData.isMaternalCapital = action.payload;
    },
    saveApplication(state, action) {
      state.applications.push({...action.payload, number: state.currentApplicationNumber, client: state.clientData});
      state.currentApplicationNumber += 1;
    },
    saveClientData(state, action) {
      localStorage.setItem('client', JSON.stringify(action.payload));
      state.clientData = action.payload;
    },
    clearUserData(state) {
      localStorage.removeItem('user');
      state.userData = defaultUserData;
    },
    clearCreditData(state) {
      state.creditData = defaultCreditData;
    },
    clearClientData(state) {
      localStorage.removeItem('client');
      state.clientData = defaultClientData
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
    saveApplication,
    saveClientData,
    clearUserData,
    clearCreditData,
    clearClientData
  } = ligaBankSlice.actions;

  export default Reducer;
