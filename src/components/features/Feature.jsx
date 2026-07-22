import React from "react";

const Feature = ({id, title, description, image, alt, video, direction }) => {
  return (
   <div
  className={`relative mx-auto flex max-w-screen-lg flex-col items-center justify-center ${
    id % 2 !== 0 ? "sm:flex-row" : "sm:flex-row-reverse"
  } space-y-4`}
>
      <div className="mt-12 flex-1 space-y-4 tracking-wider">
        <h1 className="max-w-lg text-center text-4xl font-bold sm:text-5xl">{title}</h1>
        <h2 className="text-center text-2xl tracking-normal ">{description}</h2>
      </div>
      <div className="relative flex-1 ">
       <img alt={alt} src={`./images/${image}`} className="z-10" />
        <video
  loop
  autoPlay
  muted
  playsInline
  src={`./images/${video}`}
  className="absolute top-1 left-0 -z-10 sm:top-20 sm:left-16 sm:w-96"
/>
      </div>
    </div>
  );
};

export default Feature;
