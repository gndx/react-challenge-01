/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/Button.styl';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { show } = this.state;
    const { google } = this.props;
    switch (show) {
      case true:
        return (
          <>
            <button
              type="button"
              onClick={this.handleClick}
              className="style__button-show"
            >
              Ocultar Mapa
            </button>
            <Map
              google={google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              <Marker
                title="Platzi HQ México"
                position={{ lat: 19.4267261, lng: -99.1718706 }}
              />
              <Marker
                title="Platzi HQ Bogotá"
                position={{ lat: 4.6560716, lng: -74.0595918 }}
              />
            </Map>
          </>
        );
      default:
        return (
          <button
            type="button"
            onClick={this.handleClick}
            className="style__button-hide"
          >
            Ver Mapa
          </button>
        );
    }
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);