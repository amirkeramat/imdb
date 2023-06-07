import MovieBox from "../movieBox/MovieBox"
export default function BestFilms() {
  return (
    <div className="p-4 grid grid-cols-2 gap-2">
      <MovieBox/>
      <MovieBox/>
      <MovieBox/>
      <MovieBox/>
      <MovieBox/>
      <MovieBox/>
      <MovieBox/>
    </div>
  )
}
