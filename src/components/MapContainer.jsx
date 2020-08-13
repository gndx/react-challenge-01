/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/sort-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-sequences */
/* eslint-disable no-this-before-super */
/* eslint-disable no-empty */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable default-case */
/* eslint-disable no-var */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
  
import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component  {
  constructor(props){
    super(props)
    this.google=props.google
    this.state={
      show:false,
      video1:props.videos.trends[0],
      video2:props.videos.trends[1],
      showingInfoWindow: false,
      activeMarker: {},        
      selectedPlace: {}        
    }
    
    this.ocultar=this.ocultar.bind(this)
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  ocultar(){
    const mapa=document.getElementById("mapas");
    if(!this.state.show)
    {
      mapa.style.visibility="hidden"; 
      this.state.show=true
    }
    else{
      mapa.style.visibility="visible"
      this.state.show=false; 
    }
    
  }

  

  render()
  {
    return (
      <div>
        <button onClick={this.ocultar}>click</button>
        <div id="mapas">
          <Map
            style={{width: '100%', height: '100%', position: 'relative'}}

            google={this.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name="sede mexico"
              position={{ lat: 19.4267261, lng: -99.1718706 }}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>



            <Marker
              onClick={this.onMarkerClick}
              name={this.state.video2.venueName}
              position={{ lat: this.state.video2.venueLat, lng: this.state.video2.venueLon}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>


            
            <Marker
              onClick={this.onMarkerClick}
              name={this.state.video1.venueName}
              position={{ lat: this.state.video1.venueLat, lng: this.state.video1.venueLon}}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

          </Map>
        </div>  
      </div>
      
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);