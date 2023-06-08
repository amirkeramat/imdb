export default function MovieBox({
  id,
  title,
  country,
  posters,
  year,
  generes: genres,
}) {
  return (
    <div className="flex flex-col w-[full] h-[300px] bg-slate-950 bg-opacity-100 rounded-xl">
      <h1 className=" bg-primary text-gray-950 text-center text-xl">{id}</h1>
      <img className="w-[full] h-[60%] rounded" src={posters} alt="" />
      <p>{title}</p>
      <div className="imdb-rating flex justify-between">
        <h6>{year}</h6>
        <h6>{country}</h6>
      </div>
      <div>
        {genres}
      </div>
    </div>
  );
}
