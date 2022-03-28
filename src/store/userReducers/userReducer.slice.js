import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from './userReducer.thunk';

const initialState = {
  loading: false,
  error: null,
  message: null,
  data: [],
  petBreed: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMessage: (state, {payload}) => {
      state.message = payload;
    },
    setPetBreed: (state, {payload}) => {
      state.petBreed = payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.data = payload;
    },
    [userLogin.pending]: state => {
      state.loading = true;
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {setMessage, setPetBreed} = userSlice.actions;
export default userSlice;
