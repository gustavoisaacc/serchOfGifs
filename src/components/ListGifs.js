import {useEffect, useState} from 'react'
import Gifs from './Gifs';

const API_KEY = 'ffY8nIBCMrrpMPXsEgt6psSCBvEQLjk1&q';


const ListGifs = ({keyword}) => {
  const [gifs, setgifs] = useState([]);
  
  const URL =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=15&offset=0&rating=g&lang=es`
  const urlAPi = 'https://api.giphy.com/v1/gifs/trending?api_key=ffY8nIBCMrrpMPXsEgt6psSCBvEQLjk1&limit=15&rating=g'
  
  useEffect(()=>{
    fetch((keyword === '') ? urlAPi : URL)
   .then( res => res.json())
   .then( respuesta => {
     const {data} = respuesta
     const gifs = data.map(imagen => {
       const {images, title, id} = imagen
       const {url} = images.downsized_medium
       return {title, id, url}
      })
      setgifs(gifs)
    })
    
  },[URL,keyword])
  return (
       <div className="container">
           {
             gifs.map(singleGif => 
                <Gifs 
                    key={singleGif.id}
                    title={singleGif.title} 
                    url={singleGif.url}
                    id={singleGif.id}
                />)
            }
       </div>
  )
}

export default ListGifs