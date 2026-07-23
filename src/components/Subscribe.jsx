import React from 'react';

const Subscribe = () => {
  return (
    <div className="m-4 flex flex-col gap-3 text-white sm:flex-row sm:gap-0 sm:justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-sm bg-white px-4 py-3 text-black outline-none sm:w-[400px] sm:rounded-r-none sm:p-4"
      />
      <button className="flex w-full items-center justify-center gap-1 whitespace-nowrap rounded-sm bg-[#e50914] py-3 text-xl font-medium sm:w-auto sm:rounded-l-none sm:px-8">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default Subscribe;