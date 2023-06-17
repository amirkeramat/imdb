import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const imageLoadingSlice = createSlice({
  name: "imageLoading",
  initialState,
  reducers: {
    imageLoading: (state,action) => {
      state.show = action.payload
    },
  },
});
export const imageLoadingAction = imageLoadingSlice.actions.imageLoading;
export default imageLoadingSlice.reducer;
