import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  genresData: [],
  error: "",
};
export const FetchGenres = createAsyncThunk("film/fetchGenres", (url) => {
  return axios.get(url).then((Response) => Response.data);
});

const genresSlice = createSlice({
  name: "fetchGenres",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchGenres.fulfilled, (state, action) => {
      (state.loading = false), (state.genresData = action.payload);
      state.error = "";
    });
    builder.addCase(FetchGenres.rejected, (state) => {
      (state.loading = false), (state.genresData = ""), (state.error = "error");
    });
  },
});

export default genresSlice.reducer;
export const showSubMenuAction = genresSlice.actions.showSubMenu