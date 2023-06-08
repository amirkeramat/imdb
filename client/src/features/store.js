import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import SearchReducer from "./search/SearchSlice";
import SearchBoxShowReducer from "./searchBox/SearchBoxSlice";
const store = configureStore({
  reducer: {
    bestFilms: filmsReducer,
    showSearchbar: SearchBoxShowReducer,
    searchResult: SearchReducer,
  },
});

export default store;
