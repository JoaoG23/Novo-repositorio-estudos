import React ,{ useEffect, useState } from 'react';
import './MyCss.css';
function App() {

  const [ videos , setVideos ] = useState([]);

  useEffect(() => {

    fetch('/api/videos')
    .then(resp => resp.json())
    .then( data => {
      setVideos( data )
    })
  },[]);
  
  return (<div>
   <header className='container'>
      <h1>Home</h1>
   </header>
    { videos.map( (id, index) => {
      return(<a key={ index } href={`https://www.youtube.com/watch?v=${ id }`}>
        <img src={`https://img.youtube.com/vi/${ id }/0.jpg`}></img>
      </a>)
    })}
  </div>
  );
}

export default App;
