import React from 'react';


const footerLink = ({links}) => {
  
  return (
    <div className="mx-4 my-2 flex flex-col">
    {links.map((data,index)=>(
     <a href="" className="my-1 text-sm text-[#6c6c6c]"  key={index}>
     {data}
     </a>
      ))}  
    </div>
  )
}

export default footerLink