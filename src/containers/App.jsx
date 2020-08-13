/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [videos,setvideo]=useState({mylist: [], trends: [], originals: []});

useEffect(()=>{
  
     fetch('http://localhost:3000/initalState')
    .then(response=>response.json())
    .then(data=>setvideo(data))
},[])
  return (
    <div className="App">
      {videos?(
        <MapContainer videos={videos} />
      ):null}
    </div> 
    
  )
};

export default App;
