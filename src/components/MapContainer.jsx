/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/containers/Map.styl';

class MapContainer extends React.Component {
  state = {
    visible: true,
    showingInfoWindow: false,
    locations: [],
    activeMarker: {},
    selectedPlace: {},
  };

  showMap = () => {
    if (!this.visible) {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { google, locations } = this.props;
    return (
      <>
        <button className="Map__button" type="button" onClick={this.showMap}>
          {this.state.visible ? 'Hide Map' : 'Show Map'}
        </button>
        <Map
          google={this.props.google}
          className="map"
          visible={this.state.visible}
          zoom={5}
          initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
          onClick={this.onMapClicked}
        >
          {locations.map((location, key) => (
            <Marker
              Key={key}
              position={{ lat: location.venueLat, lng: location.venueLon }}
              onClick={this.onMarkerClick}
              name={location.vanueName}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.initialCenter}</h1>
              <p>Platzi Bogotá</p>
            </div>
          </InfoWindow>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: props.language,
}))(MapContainer);
