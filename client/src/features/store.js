import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import SearchReducer from "./search/SearchSlice";
import SearchBoxShowReducer from "./searchBox/SearchBoxSlice";
import imageLoadingReducer from "./imageLoading/ImageLoading";
const store = configureStore({
  reducer: {
    bestFilms: filmsReducer,
    showSearchbar: SearchBoxShowReducer,
    searchResult: SearchReducer,
    imageLoading: imageLoadingReducer,
  },
});

export default store;
