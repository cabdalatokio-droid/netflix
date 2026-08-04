import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import BASE_IMAGE_URL from '../../constants'

const Row = ({title,url}) => {
    const [movies, setMovies] = useState([])

  useEffect(() => {

    const fetchMovie= async () => {
      const { data } = await axios.get(url);
      console.log(data)
      setTrending(data.results
      );
    };
    fetchMovie();
  }, []);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <FaChevronLeft className=''/>
        <div>
          {
            movies && movies.map(movies=>(
              <img src={`${BASE_IMAGE_URL + movies.backdrop_path || movies.poster_path}`}alt="" />
            ))
          }
        </div>
        <FaChevronRight className=''/>
      </div>
    </div>
  )
}

export default Row