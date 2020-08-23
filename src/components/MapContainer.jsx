import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import 'react-app-polyfill/stable'

const localAPI = 'http://localhost:3000/locations'

const getData = async (api) => {
  try{
    const res = await fetch(api)
    const data = await res.json()
    return data
  }catch(err){
    console.error(err)
  }
}

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {show: false,
      text: 'Mostrar Mapa',
      datos:[],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render(){
    return (
      <>
        <button onClick={this.state.show ? (()=> this.setState({show: false, text: 'Mostar Mapa'}))
          : (()=>{ 
            this.setState({show: true, text: 'Ocultar Mapa'})
            getData(localAPI)
              .then((data) => this.setState({datos: data}))
        })
          }
        >
          {this.state.text}
        </button>
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 11.1893394, lng: -87.3446332 }}
          visible={this.state.show}
          onClick={this.onMapClicked}
        >
          {
            this.state.datos.map((data)=> (
              <Marker
                onClick={this.onMarkerClick}
                name={data.venueName}
                position={{ lat: data.venueLat, lng:data.venueLon }}
              />
            ) )
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
    }
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);