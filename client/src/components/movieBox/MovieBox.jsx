import React from 'react'

export default function MovieBox() {
  return (
    <div className="flex flex-col w-[full] h-[300px] bg-sky-900">
      <img className="w-[full] h-[60%] rounded" src="about.jpg.webp" alt="" />
      <p>Name:</p>
      <div className="imdb-rating flex justify-between">
        <h6>Rank:</h6>
        <h6>Year:</h6>
        <h6>count:</h6>
      </div>
      <div>aouthors:</div>
    </div>
  );
}
