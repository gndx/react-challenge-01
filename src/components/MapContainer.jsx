import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Styles/Button.css'

export const MapContainer= class extends React.PureComponent{
  

  state={
    show:false,
    data: undefined
  }

  componentDidMount(){
    // eslint-disable-next-line no-undef
    fetch('http://localhost:3000/locations')
      .then(res=>res.json())
      .then(json=>this.setState({data:json}));
  }

  handleClick=()=>{
    const {show}=this.state;
    this.setState({show:!show})
  }

  
/*
  fetchData=()=>{
      fetch('http://localhost:3000/locations')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  } */
/*
  const fetchData=async()=>{
    const response= await fetch('http://localhost:3000/locations');
    const dat=await response.json();
    console.log(dat);
  } */

  render(){
    const {google}= this.props;
    const {show, data}=this.state;

    return (
      <>
        {show && (
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {data.map(e=>(
            <Marker
              key={e.venueName}
              position={{ lat: e.venueLat, lng: e.venueLon}}
            />
          ))}
        </Map>
      )}
        <button
          className='button'
          type='button'
          onClick={this.handleClick}
        >
          Ocultar/ver mapa

        </button>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);