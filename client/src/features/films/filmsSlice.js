import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  films: [],
  error: "",
};

//Generates Pending ,fulfilled and rejected action-types

export const FetchFilms = createAsyncThunk("film/fetchFilm", () => {
  return axios
    .get("https://imdb-api.com/en/API/Top250Movies/k_9io7i122")
    .then((Response) => Response.data);
});

const filmSlice = createSlice({
  name: "films",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchFilms.fulfilled, (state, action) => {
      (state.loading = false),
        (state.films = action.payload),
        (state.error = "");
    });
    builder.addCase(FetchFilms.rejected, (state, action) => {
      (state.loading = false),
        (state.films = []),
        (state.error = action.error.message);
    });
  },
});

export default filmSlice.reducer