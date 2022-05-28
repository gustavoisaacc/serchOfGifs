const API_KEY = 'ffY8nIBCMrrpMPXsEgt6psSCBvEQLjk1&q';

const getGifs = ({keyword} = {}) => {
  const URL =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=5&offset=0&rating=g&lang=es`

  const urlAPi = 'https://api.giphy.com/v1/gifs/trending?api_key=ffY8nIBCMrrpMPXsEgt6psSCBvEQLjk1&limit=5&rating=g'
 
  return fetch( ( keyword=== '') ? urlAPi : URL )
  .then( res => res.json())
  .then(respuesta => {
    const {data} = respuesta
    if(Array.isArray(data)){
        const gifs = data.map(imagen => {
            const {images,title,id} = imagen;
            const {url} = images.fixed_width_small
            return {title,id,url}
        })
        return gifs
    }
})

}

export default getGifs