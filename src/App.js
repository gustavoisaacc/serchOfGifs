
import { useState } from 'react';
import ListGifs from './components/ListGifs';
import Serch from './components/Serch';
import Spiner from './components/Spiner'
import icono from './gifs.gif'


function App() {
  const [keyword, setkeyword] = useState('')
  const [spiner, setSpiner] = useState(false)


  return (
    <div className="app">
      <img className='logo' src={icono} alt="hola" />
      <Serch
        keyword={keyword} 
        setkeyword={setkeyword} 
      />

      {
        spiner ? <Spiner/>
        : <ListGifs keyword={keyword}
        setSpiner={setSpiner}/>

      }
      

    </div>
  );
}

export default App;
