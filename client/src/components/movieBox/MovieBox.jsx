import imageLoadingSvg from "/public/Eclipse-1s-200px.svg";
import { imageLoadingAction } from "../../features/imageLoading/ImageLoading";
import { useDispatch, useSelector } from "react-redux";
export default function MovieBox({
  id,
  title,
  country,
  posters,
  year,
  genres,
}) {
  const dispatch = useDispatch();
  const imageLoadingStore = useSelector((state) => state.imageLoading);
  const imageLoadingHandler = () => {
    dispatch(imageLoadingAction(true));
  };
  return (
    <div className='flex flex-col p-4 w-[full] h-[500px] bg-slate-950 bg-opacity-100 rounded-xl space-y-2'>
      <h1 className=' bg-primary text-gray-950 text-center text-xl'>Rank:{id}</h1>
      <img
        onLoad={imageLoadingHandler}
        className='w-[full] h-[60%]'
        src={posters}
        alt=''
      />
      {!imageLoadingStore.show && <img src={imageLoadingSvg} />}
      <span className='flex '>
        <h6 className='text-primary text-justify'>Name:</h6>
        {title}
      </span>
      <span className='flex '>
        <h6 className='text-primary'>Year:</h6>
        {year}
      </span>
      <span className='flex '>
        <h6 className='text-primary'>Country:</h6>
        {country}
      </span>
      {/* <span className='flex'>
        <h6 className='text-primary'>genres:</h6>
        {genres.map((genre,index) => <h6 key={index}>{genre},</h6>)}
      </span> */}
    </div>
  );
}
