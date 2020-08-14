import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/Button.css';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.handleViewMap = () => {
      this.setState({ show: !this.state.show })
    }
    this.handleMarkerClick=(props, marker,e)=>{
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      })
    }
  }

  render() {
    if (!this.state.show) {
      return (
        <>
          <button className='style__button-hide' type='button' onClick={this.handleViewMap}>OCULTAR MAPA</button>
          <Map
            google={this.props.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {
              this.props.markers.map(marker => (
                  <Marker
                    key={marker.id}
                    name={marker.venueName}
                    position={{ lat: marker.venueLat, lng: marker.venueLon }}
                    onClick={this.handleMarkerClick}
                  />
                )
              )
            }
            <InfoWindow 
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </>
      );
    } else {
      return (
        <button className='style__button-show' type='button' onClick={this.handleViewMap}>MOSTRAR MAPA</button>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);