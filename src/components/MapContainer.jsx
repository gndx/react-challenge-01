import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';

import './styles/ButtonMap.css'

import {ShowMap} from '../actions'

const MapContainer = (props) => {
  const {locations, show, google} = props
  console.log({locations})

  const handleShowMap = () => {
    props.ShowMap()
  }
  return (
    <>
      <button type='button' onClick={handleShowMap}>Show Map</button>
      {show === true ? (
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {locations.map((item) => (
            <Marker
              key={item.id}
              name={item.title}
              position={{lat: item.Lat, lng: item.Lng}}
            />
            ))}
        </Map>
      ) :
      null}
    </>
  );
}

const mapDispatchToProps = {
  ShowMap,
};

export default connect(null, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer));