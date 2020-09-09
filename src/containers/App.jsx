import React, { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    window
      .fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .catch(error => console.error(error))
      .then(response => setLocations(response));
  }, []);

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  );
};

export default App;
