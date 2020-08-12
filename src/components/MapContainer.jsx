import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      <Marker
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);