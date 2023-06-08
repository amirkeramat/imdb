import MovieBox from "../movieBox/MovieBox"
export default function BestFilms() {
  return (
    <div className="p-4 grid grid-cols-2 gap-2 h-full min-h-[670px] max-h-full">
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
