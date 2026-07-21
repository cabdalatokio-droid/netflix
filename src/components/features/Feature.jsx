import React from 'react'

const Feature = ({title,description,image,alt,video,direction}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div>
        <image src={`./images/${image}`}/>
        <video loop autoplay src={`./images/${video}`}/>
      </div>
    </div>
  )
}

export default Feature