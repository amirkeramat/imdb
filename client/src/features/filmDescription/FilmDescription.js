import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  show: false,
  loading: false,
  filmsData: {},
  error: "",
};

export const fetchFilmByName = createAsyncThunk(
  "filmDescription/fetchFilmByName",
  (url) => {
    return axios.get(url).then((Response) => Response.data);
  }
);

const filmDescriptionSlice = createSlice({
  name: "filmDescription",
  initialState,
  reducers: {
    showFilmDescription: (state) => {
      state.show = !state.show;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmByName.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchFilmByName.fulfilled, (state, action) => {
        (state.loading = false), (state.filmsData = action.payload);
        state.error = "";
      }),
      builder.addCase(fetchFilmByName.rejected, (state, action) => {
        (state.loading = false),
          (state.filmsData = {}),
          (state.error = action.error.message);
      });
  },
});
export const filmDescriptionAction =
  filmDescriptionSlice.actions.showFilmDescription;
export default filmDescriptionSlice.reducer;
