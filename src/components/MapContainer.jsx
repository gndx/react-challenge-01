import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class MapContainer extends Component  {

  render(){
    return (
      <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}>
        {
          this.props.locations.map(item =>
            (
              <Marker
                key={item.venueName}
                position={{ lat: item.venueLat, lng: item.venueLon }}
              />
            ),
          )
        }
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);