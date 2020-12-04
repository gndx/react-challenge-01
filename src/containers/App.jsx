import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [showMap, setShowMap] = useState(false);

  const show = () => {
    setShowMap(!showMap);
  };


  return (
    <div className="App">
      <button type="button" className="ButtonHandler" onClick={show}>{showMap ? 'Hide' : 'Show'}</button>
      {
        showMap &&
          <MapContainer />
      }
    </div>
  );
};

export default App;
