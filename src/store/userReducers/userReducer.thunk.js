import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, secureApi} from '../../utils/api.util';

export const userLogin = createAsyncThunk(
  'userLogin',
  async (body, {rejectWithValue}) => {
    const {email, password} = body;
    try {
      const {data} = await api.post('/user/login', {
        email: email,
        password: password,
        language: 'en',
        country: 'za',
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
