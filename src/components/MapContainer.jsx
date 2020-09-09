import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './MapContainer.styl';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShowClick = this.handleShowClick.bind(this);
  }

  handleShowClick() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    const { show } = this.state;
    const { google } = this.props;
    return (
      <>
        {show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
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
