import React, { useState, useEffect } from 'react'
import requests from '../../request'
import axios from 'axios'
import BASE_IMAGE_URL from '../../constants'
import { AiFillPlayCircle,AiOutlineInfoCircle } from 'react-icons/ai'

const Banner = () => {
  const [trending, setTrending] = useState([])
  useEffect(() => {

    const fetchNetflixOriginals = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      console.log(data)
      setTrending(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
    };
    fetchNetflixOriginals();
  }, []);

  return (
    <div className=" space-y-2 flex flex-col py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen  ">
        <img src={`${BASE_IMAGE_URL + trending.backdrop_path || trending.poster_path}`} alt=""
          className="h-screen w-screen object-cover" />
      </div>
         <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{trending.title || trending.name || trending.original_name}</h1>
        <p className="max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{trending.overview}</p>
        <div className='flex items-center space-x-2'>
          <button className='flex items-center rounded bg-white px-5 py-1 text-black transtion hover:bg-gray-200 md:px-7 md:py-2 text-lg'>
            <AiFillPlayCircle className='h-6 w-6'/>
          </button>
          <button className='flex items-center rounded bg-[#5a7272] px-5 py-1 hover:bg-[#718a8a md:px-7 md:py-2 md:text-lg'>
            <AiOutlineInfoCircle className='h-6 w-6'/>
            More Info
          </button>
        </div>
    </div>
  )
}

export default Banner











































// practice exercie questions
//  question 1

// const largestNegativeNumber=(arr)=>{

//   let lef=arr[0];
//   let rigth=arr.length-1;
//   let temp="";

//   for(let i=0; i<arr.length;i++){
//     while(left<rigth){
        
//       if(left===right){
//        return true
//       }
//       else{
//         return false
//       }
//     }
// }















// largestNegativeNumber([]);


// const reverseFunction=(str)=>{
//   let reverse="";
//   for(let i=str.length; i>=0;i--){
//     reverse+=str[i];
//   }
//   return reverse;
// }

// reverseFunction("JavaScript");





// const secondLargestNumber=(arr)=>{
// let smallest=arr[0];
// secondSmallest=-Infinity
// for(let i=1; arr.length;i++){
//   if(arr[i]<smallest){
//    secondSmallest=smallest
//    smallest=arr[i];
//   }
//   else(if[arr])

// }
// }