import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './MapContainer.styl';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMapClicked = this.handleMapClicked.bind(this);
  }

  handleMarkerClick(props, marker, e) {
    this.setState(state => ({
      ...state,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    }));
  }

  handleMapClicked(props) {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState(state => ({
        ...state,
        showingInfoWindow: false,
        activeMarker: null,
      }));
    }
  }

  handleShowClick() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    const { show, activeMarker, showingInfoWindow, selectedPlace } = this.state;
    const { google, locations } = this.props;
    return (
      <>
        {show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {locations.map(location => (
              <Marker
                name={location.venueName}
                key={location.venueName}
                onClick={this.handleMarkerClick}
                position={{ lat: location.venueLat, lng: location.venueLon }}
              />
            ))}

            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
              <div>
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        )}
        {show ? (
          <button
            type="button"
            onClick={this.handleShowClick}
            className="btn-show-hide btn-hide"
          >
            Ocultar mapa
          </button>
        ) : (
          <button
            type="button"
            onClick={this.handleShowClick}
            className="btn-show-hide btn-show"
          >
            Mostrar mapa
          </button>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
