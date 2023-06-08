import React from 'react'
import MovieBox from '../movieBox/MovieBox';
export default function BestTvs() {
  return (
    <div className="p-4 grid grid-cols-2 gap-2 h-screen max-h-screen">
      <MovieBox />
      <MovieBox />
    </div>
  );
}
