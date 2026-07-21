import React from "react";

const Feature = ({ title, description, image, alt, video, direction }) => {
  return (
   <div
  className={`relative mx-auto flex max-w-screen-lg flex-col items-center justify-center ${
    id % 2 !== 0 ? "sm:flex-row" : "sm:flex-row-reverse"
  } space-y-4`}
>
      <div className="">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div>
       <img alt={alt} src={`./images/${image}`} />
        <video loop autoPlay src={`./images/${video}`} />
      </div>
    </div>
  );
};

export default Feature;
