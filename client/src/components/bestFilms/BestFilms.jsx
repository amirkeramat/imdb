import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  { FetchFilms } from "../../features/films/filmsSlice";
export default function BestFilms() {
  const films = useSelector(state=>state.films)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(FetchFilms())
    console.log(films);
  },[])
  return (
    <div className='p-4 grid grid-cols-2 gap-2'>
    </div>
  );
}
