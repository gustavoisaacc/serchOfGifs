import React from 'react'

const Serch = ({keyword, setkeyword}) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(keyword)
    }
    const handleChange = function (e) {
        setkeyword(e.target.value) 
       
    }

  return (
    <form 
        onSubmit={handleSubmit}
    >
        <input 
            placeholder='Serch all the GIFS'
            className='input'
            type="text" 
            value={keyword}
            onChange={handleChange}
        />
    </form>
  )
}

export default Serch