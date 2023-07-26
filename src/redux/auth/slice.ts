import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
} from "./operations";

interface State {
  user: User;
  token: null | string;
  error: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
interface User {
  name: null | string;
  email: null | string;
}

const initialState: State = {
  user: { name: null, email: null},
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action: PayloadAction<any>) => state)
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload.message;
      })

      .addCase(login.pending, (state, action: PayloadAction<any>) => {
        return state;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        const { name, email, token } = action.payload;
        state.token = token;
        state.user = {
          name: name,
          email: email,
        };
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
  },
});

export const authReducer = authSlice.reducer;
