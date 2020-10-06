import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/Button.css';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      locations: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(resolve => resolve.json())
      .then(result => {
        this.setState({
          locations: result,
        });
      });
  }

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { show, locations } = this.state;
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
              {locations.map(l => (
                <Marker
                  key={l.venueName}
                  title={l.venueName}
                  name={l.venueName}
                  position={{ lat: l.venueLat, lng: l.venueLon }}
                />
              ))}
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
            Mostrar Mapa
          </button>
        );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
