import React,{ useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [ locations, setlocations] = useState([]);

  useEffect(() => {
    const API = 'http://localhost:3000/locations';
    window.fetch(API)
    .then(reponse=>reponse.json())
    .then(data => setlocations(data));
  },[])
  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
