import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const Faq = ({ title, description }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mx-auto flex-col py-[2px] px-2 sm:max-w-screen-md">
      <div 
        onClick={() => setShow(!show)} 
        className='my-[2px] flex justify-between bg-[#303030] py-4 px-2 sm:py-5 sm:px-6'
      >
        <h1 className="text-lg sm:text-2xl">{title}</h1>
        {show ? (
          <AiOutlineClose className="h-8 w-8" />
        ) : (
          <AiOutlinePlus className="h-8 w-8" />
        )}
      </div>

      {show && (
        <div className="bg-[#303030] border-t border-gray-700">
          <p className='px-2 py-4 text-lg sm:py-6 sm:px-6 sm:text-2xl'>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Faq;