import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
		super(props);
		this.state = {
			showMap: false,
    };
  }

  mostrarMapa = () => {
    this.setState({showMap: !this.state.showMap});
  }

  render() {
    const { showMap } = this.state;
    console.log(`Variable ${showMap}`);
      return (
        <>
          <button onClick={this.mostrarMapa}>{showMap ? 'Ocultar Mapa' : 'Mostrar Mapa'}</button>
          {showMap ? (
            <Map
              google={google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              <Marker
                position={{ lat: 19.4267261, lng: -99.1718706 }}
              />
              <Marker
                position={{ lat: 4.6560716, lng: -74.0595918 }}
                title="Platzi HQ Bogota"
                name="SOMA"
              />
            </Map>
                )
            :
            <h1>Nooo Existe</h1>
          }
        </>
          )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);