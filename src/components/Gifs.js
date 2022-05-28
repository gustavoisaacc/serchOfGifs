import React from 'react'


const Gifs = ({title,url}) => {
  return (
    <div className="container-gifs">
        <img
            src={url} 
            alt={title} 
        />
    </div>
  )
}

export default Gifs