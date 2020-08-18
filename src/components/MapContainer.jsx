import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Styles/Button.css'

export const MapContainer= class extends React.PureComponent{
  
  state={
    show:false
  }

  handleClick=()=>{
    const {show}=this.state;
    this.setState({show:!show})
    console.log(show);
  }

  render(){
    const {google}= this.props;
    const {show}=this.state;

    return (
      <>
        {show && (
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />
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