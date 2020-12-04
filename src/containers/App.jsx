import React, { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const API = 'http://localhost:3000/locations';
  const [showMap, setShowMap] = useState(true);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
     fetch(API)
      .then(response => response.json())
      .then(res => setLocations(res));
  }, []);

  const show = () => {
    setShowMap(!showMap);
  };


  return (
    <div className="App">
      <button type="button" className="ButtonHandler" onClick={show}>{showMap ? 'Hide' : 'Show'}</button>
      {
        showMap &&
          <MapContainer  locations={locations}/>
      }
    </div>
  );
};

export default App;
