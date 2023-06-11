import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import SearchReducer from "./search/SearchSlice";
import SearchBoxShowReducer from "./searchBox/SearchBoxSlice";
import imageLoadingReducer from "./imageLoading/ImageLoading";
import filmDescriptionReducer from "./filmDescription/FilmDescription";
import genresReducer from './genres/GenresSlice'
import showMenuReducer from './menu/MenuSlice'
const store = configureStore({
  reducer: {
    bestFilms: filmsReducer,
    showSearchbar: SearchBoxShowReducer,
    searchResult: SearchReducer,
    imageLoading: imageLoadingReducer,
    showFilmDescriptionAction: filmDescriptionReducer,
    genres: genresReducer,
    showMenu: showMenuReducer,
  },
});

export default store;
