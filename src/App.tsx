import {useState} from 'react'

const urlDown = "http://54.145.59.200:3000/?url=https://www.youtube.com/watch?v=eDeDcYn3vrs"


function App() {
  const [Download, setDownload] = useState('');
  
  return (
    <div className="App">
    
      <h1>Baixar Videos</h1>
        <p>
          
          <button onClick={()=> setDownload(urlDown)}> Baixar</button>
          <div className="group">
            
            </div>
        </p>
        <p>{Download}</p>
      
        {Download && <iframe title="This is a unique title" src={Download}></iframe>}
    </div>

  );
  }
export default App;