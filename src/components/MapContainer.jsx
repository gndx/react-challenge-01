import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showMap = this.showMap.bind(this);
  }

  showMap() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  render() {
    if (this.state.show) {
      return (
        <React.Fragment>
          <button type="button" className="map__button" onClick={this.showMap}>
            Hide map
          </button>
          <Map
            style={{ height: '90vh' }}
            google={this.props.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.props.markers.map(element => (
              <Marker
                key={element.id}
                name={element.venueName}
                position={{ lat: element.venueLat, lng: element.venueLon }}
              />
            ))}
          </Map>
        </React.Fragment>
      );
    } else {
      return <button onClick={this.showMap}>Show map</button>;
    }
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);