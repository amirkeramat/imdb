import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://moviesapi.ir/api/v1/" }),
  endpoints:(builder)=>({
    listMovies:builder.query({
      query:(page=1)=>`movies?page=${page}`,
    })
  })
});

export const {useListMoviesQuery} = api