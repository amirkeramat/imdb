import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  {
    loading: false,
    error: "",
    data: "",
    token: null,
  },
];

const options = {
  Headers: { "Content-Type": "application/json" },
};
export const FetchRegisterUser = createAsyncThunk(
  "user/fetchRegisterUser",
  (url) => {
    return axios.post(url,data, options);
  }
);
