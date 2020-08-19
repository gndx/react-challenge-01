import React from 'react';
import { Map, GoogleApiWrapper, Marker , InfoWindow } from 'google-maps-react';
import './Styles/Button.css'

export const MapContainer= class extends React.PureComponent{
  

  state={
    show:false,
    data: undefined,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  componentDidMount(){
    // eslint-disable-next-line no-undef
    fetch('http://localhost:3000/locations')
      .then(res=>res.json())
      .then(json=>this.setState({data:json}));
  }

  handleClick=()=>{
    const {show}=this.state;
    this.setState({show:!show})
  }

  handleClickMarker = (marker, e ) =>{
    this.setState({
      selectedPlace: e,
      activeMarker: null,
      showingInfoWindow: true
    });
    console.log(e);
    console.log(this.state.activeMarker);
  }

    handleClickMap = () => {
      const {showingInfoWindow}= this.state
      if (showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

  render(){
    const {google}= this.props;
    const {show, data, activeMarker, showingInfoWindow, selectedPlace}=this.state;

    return (
      <>
        {show && (
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          onClick={this.handleClickMap}
        >
          {data.map(e=>(
            <Marker
              key={e.venueName}
              position={{ lat: e.venueLat, lng: e.venueLon}}
              onClick={event =>this.handleClickMarker(event, e)}
              name={e.venueName}
            />
          ))}
          <InfoWindow 
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h1>{selectedPlace.venueName}</h1>
            </div>
          </InfoWindow>
        </Map>
      )}
        <button
          className='button'
          type='button'
          onClick={this.handleClick}
        >
          Ocultar/ver mapa
        </button>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);