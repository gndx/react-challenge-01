import React, { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const API = 'http://localhost:3000/locations';
    fetch(API)
      .then(res => res.json())
      .then(response => {
        setItems(response);
      });
  }, []);

  return (
    <div className="App">
      <MapContainer />
      <MapContainer markers={items} />
    </div>
  );
};

export default App;