import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/Button.css';

class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state={
      show: false,
    }
    this.handleViewMap=()=>{
      this.setState({show:!this.state.show})
    }
  }
  
  render () {
    if(this.state.show){
        return (
        <>
            <button className='style__button-hide' type='button' onClick={this.handleViewMap}>OCULTAR MAPA</button>
          <Map
              google={this.props.google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              <Marker
                position={{ lat: 19.4267261, lng: -99.1718706 }}
              />
          </Map>
        </>
        );
    }else {
      return(
        <button className='style__button-show' type='button' onClick={this.handleViewMap}>MOSTRAR MAPA</button>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);