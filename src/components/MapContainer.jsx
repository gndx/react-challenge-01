/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component{

  constructor(props) {
      super(props);
      this.state = {
        isVisible: true,
        locations: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
      this.handleClick = this.handleClick.bind(this);
      
  } 

  componentDidMount(){
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(locationsJson => this.setState({ locations: locationsJson}))
  }
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = () => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
    
  handleClick(){
    this.setState(state => ({
      isVisible: !state.isVisible
    }))
  }

  render(){
    return(
      <>
        <div className="button">
          <button type="button" onClick={this.handleClick}> 
            {this.state.isVisible ? 'Ocultar Mapa' : 'Mostrar Mapa'} 
          </button>
        </div>
        <Map
          google={this.props.google}
          zoom={4}
          visible={this.state.isVisible}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          onClick={this.onMapClicked}
        >
          {this.state.locations.map((item) => <Marker onClick={this.onMarkerClick} name={item.venueName} position={{ lat: item.venueLat, lng: item.venueLon}} key={item.venueName}  /> )}
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
    )
  }
}

  

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);