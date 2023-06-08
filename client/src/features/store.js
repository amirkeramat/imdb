import { configureStore } from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsSlice";
import { useListMoviesQuery } from "../api/films";

const store = configureStore({
    reducer:{
        bestFilms:filmsReducer,
    }
})

export default store