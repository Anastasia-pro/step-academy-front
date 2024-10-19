import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLogin = createAsyncThunk('https://step-backend.onrender.com/login/fetchLogin', async (params) => {
  const { data } = await axios.post('https://step-backend.onrender.com/login', params);
  return data;
});

export const fetchLoginMe = createAsyncThunk('login/fetchLoginMe', async () => {
  try {
    const token = sessionStorage.getItem('token');
    const { data } = await axios.get('/me', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error('fetchLoginMe ошибка:', error);
    throw error;
  }
});

export const fetchRegister = createAsyncThunk('login/fetchRegister', async (params) => {
  const { data } = await axios.post('/reg', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
  token: null,
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.token = null;
    },
    login: (state, action) => {
      state.data = action.payload;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchLoginMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLoginMe.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        state.userName = action.payload.fullName;
      })
      .addCase(fetchLoginMe.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout, login } = authSlice.actions;
export const authSelect = (state) => Boolean(state.login.data);