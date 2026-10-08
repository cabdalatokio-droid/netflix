import React, { useEffect, useRef, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import BASE_IMAGE_URL from '../../constants'
import axios from 'axios';

const Row = ({title,url}) => {

 const [movies, setMovies] = useState([])
 const[isScrolled,setScrolled]=useState(false);
 const rowReff= useRef(null);

const HandleScrolling=(direction)=>{
  setScrolled(true);
 if(rowReff.current){
  const{clientWidth,scrollLeft}=rowReff.current;
  const scrollTo= direction==="left" ?
  scrollLeft-clientWidth :
  scrollLeft+clientWidth;
 rowReff.current.scrollTo({ left: scrollTo, behavior: "smooth" 
  })
 }
}


  useEffect(() => {

    const fetchMovie= async () => {
      const { data } = await axios.get(url);
      console.log(data)
      setMovies(data.results
      );
    };
    fetchMovie();
  }, [url]);

  
  return (
    <div className='h-40 '>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='group relative md:-ml-2'>
        <FaChevronLeft onClick={()=>HandleScrolling("left")} className={`${
						!isScrolled && "hidden"
					} absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}/>
        <div
        ref={rowReff}
         className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2'>
          {
            movies && movies.map(movies=>(
            <div key={movies.id} className='relative h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] md:hover:scale-105 transition duration-200 ease-out'>
              <img key={movies.id} src={`${BASE_IMAGE_URL + movies.backdrop_path || movies.poster_path}`}alt="" className='rounded-sm md:rounded object-cover transition duration-500'/>
              </div>
            ))
          }
        </div>
        <FaChevronRight onClick={()=>HandleScrolling("right")} className='absolute top-0 bottom-0 z-40 right-2 m-auto h-9 w-9 opacity-0 group-hover:opacity-100 hover:scale-125 cursor-pointer transition '/>
      </div>
    </div>
  )
}

export default Row