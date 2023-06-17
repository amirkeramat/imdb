import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  filmsData: [],
  error: "",
};

//Generates Pending ,fulfilled and rejected action-types

export const FetchSearch = createAsyncThunk("film/FetchSearch", (url) => {
  return axios.get(url).then((Response) => Response.data);
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchSearch.fulfilled, (state, action) => {
      (state.loading = false), 
      (state.filmsData = action.payload.data);
      state.error = "";
    });
    builder.addCase(FetchSearch.rejected, (state, action) => {
      (state.loading = false),
        (state.filmsData = []),
        (state.error = action.payload);
    });
  },
});

export default searchSlice.reducer;
