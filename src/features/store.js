import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import SearchReducer from "./search/SearchSlice";
import SearchBoxShowReducer from "./searchBox/SearchBoxSlice";
import imageLoadingReducer from "./imageLoading/ImageLoading";
import filmDescriptionReducer from "./filmDescription/FilmDescription";
import genresReducer from "./genres/GenresSlice";
import showMenuReducer from "./menu/MenuSlice";
import filmDetailReducer from "./filmDetail/FilmDetailSlice";
const store = configureStore({
  reducer: {
    bestFilms: filmsReducer,
    showSearchbar: SearchBoxShowReducer,
    searchResult: SearchReducer,
    imageLoading: imageLoadingReducer,
    showFilmDescriptionAction: filmDescriptionReducer,
    genres: genresReducer,
    showMenu: showMenuReducer,
    singleFilmData: filmDetailReducer,
  },
});

export default store;
