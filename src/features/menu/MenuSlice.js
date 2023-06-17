import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainMenuShow: false,
  subMenuShow: false,
};

const showMenuSlice = createSlice({
  name: "showMenu",
  initialState,
  reducers: {
    mainMenu: (state) => {
      state.mainMenuShow = !state.mainMenuShow;
    },
    subMenu: (state) => {
      state.subMenuShow = !state.subMenuShow;
    },
  },
});

export default showMenuSlice.reducer;
export const showMenuAction = showMenuSlice.actions.mainMenu;
export const showSubMenuAction = showMenuSlice.actions.subMenu;
