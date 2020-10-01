import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import '../styles/components/MapContainer.styl';

import Markers from '../components/Markers';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.google = props.google;
    this.state = {
      data: [],
      show: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };

  componentWillUnmount() {
    clearImmediate(this.setStateShow);
    clearImmediate(this.map);
  }

  handleClick = e => {
    this.flipFlop();
  };

  flipFlop = () => {
    const maps = document.getElementById('map');
    if (!this.state.show) {
      maps.classList.add('hire');
      this.state.show = true;
    } else {
      maps.classList.remove('hire');
      this.state.show = false;
    }
  };

  render() {
    console.log(this.state.data.db);

    return (
      <React.Fragment>
        <div>
          <button onClick={() => this.handleClick()} className="button">
            Ocultar
          </button>
        </div>
        <div id="map">
          <Map
            style={{ height: '95%' }}
            google={this.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Markers data={this.state.data.db} />
            <Marker position={{ lat: 19.5943885, lng: -97.9526044 }} />
            <Marker position={{ lat: 19.5943885, lng: -97.9526044 }} />
          </Map>
        </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
