import React, {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const API ='http://localhost:3000/locations';
  const [markers, setMarkers]=useState([]);
  
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => { setMarkers(data)})
  }, [])
  return (
    
    <div className="App">
       <MapContainer markers={markers} />
    </div>
  )
};

export default App;
