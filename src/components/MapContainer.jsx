import React , { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			show: false
		};
		this.showHideMap =()=>{
			this.setState({show:!this.state.show});
		};
	}
	
   render(){
	   switch(this.state.show){
		   case true:
		      	     return (
					    <>
						<button type='button' onClick={this.showHideMap}>HIDE MAP</button>
	                    <Map
                           google={google}
                           zoom={5}
                           initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
                        >
                           <Marker
						      title={'Platzi HQ CDMX'}
						      name={'Platzi HQ CDMX'}
                              position={{ lat: 19.4267261, lng: -99.1718706 }}
                           />
						   <Marker
						      title={'Platzi HQ Bogota'}
						      name={'Platzi HQ Bogota'}
                              position={{ lat: 4.6560716, lng: -74.0595918 }}
                           />
                        </Map>
						</>
	                );
            default:
			        return (
		               <button type='button' onClick={this.showHideMap}>SHOW MAP</button>
		            );
	   } 

		  
	     
    
   }	
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);