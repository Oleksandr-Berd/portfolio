import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthHeader } from "../../hooks/index";

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
}

axios.defaults.baseURL =
  "http://localhost:5002/api/portfolio";

const setAuthHeader = (token: string | null) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: IUser, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      const { authHeader } = useAuthHeader(res.data.token);

      setAuthHeader(authHeader);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const login: any = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/admin/login", credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout: any = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/admin/logout");

      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser: any = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/admin/current");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

