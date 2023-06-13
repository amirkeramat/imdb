import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  filmsData: {},
  error: "",
};
export const FetchFilmDetail = createAsyncThunk(
  "film/fetchFilmDetail",
  (url) => {
    return axios.get(url).then((Response) => Response.data);
  }
);

const filmDetailSlice = createSlice({
  name: "filmDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchFilmDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchFilmDetail.fulfilled, (state, action) => {
      (state.loading = false), (state.filmsData = action.payload);
    });
    builder.addCase(FetchFilmDetail.rejected, (state, action) => {
      (state.loading = false),
        (state.filmsData = {}),
        (state.error = action.payload.error.massage);
    });
  },
});

export default filmDetailSlice.reducer;
