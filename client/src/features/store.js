import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import SearchReducer from "./search/SearchSlice";
import SearchBoxShowReducer from "./searchBox/SearchBoxSlice";
import imageLoadingReducer from "./imageLoading/ImageLoading";
import filmDescriptionReducer from "./filmDescription/FilmDescription";
const store = configureStore({
  reducer: {
    bestFilms: filmsReducer,
    showSearchbar: SearchBoxShowReducer,
    searchResult: SearchReducer,
    imageLoading: imageLoadingReducer,
    showFilmDescriptionAction: filmDescriptionReducer,
  },
});

export default store;
