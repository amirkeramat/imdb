import React from 'react'
import MovieBox from '../../components/movieBox/MovieBox';
export default function BestTvs() {
  return (
    <div className="p-4 grid grid-cols-2 gap-2 h-screen min-h-screen">
      <MovieBox />
      <MovieBox />
    </div>
  );
}
