import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
		super(props);
		this.state = {
      showMap: false,
      dataUbication: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentDidMount() {
  fetch('http://localhost:3000/locations')
  .then(response => response.json())
  .then(data => this.setState({dataUbication: data}));
  }

  mostrarMapa = () => {
    this.setState({showMap: !this.state.showMap});
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (props.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { showMap, dataUbication, activeMarker, showingInfoWindow, selectedPlace } = this.state;
      return (
        <>
          <div className='style_button'><button onClick={this.mostrarMapa}>{showMap ? 'Ocultar Mapa' : 'Mostrar Mapa'}</button></div>
          {showMap && (
            <Map
              google={google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              {
                dataUbication.map(item => (
                  <Marker
                    key={item.venueName}
                    position={{ lat: item.venueLat, lng: item.venueLon }}
                    title={item.venueName}
                    onClick={this.onMarkerClick}
                    name={item.venueName}
                  />
          ))
              }
              <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
              >
                <div>
                  <h1>{selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
                )
          }
        </>
          )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);