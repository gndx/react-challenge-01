import React , { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			show: false,
			locations: [],
			showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
		};
		
		this.showHideMap =()=>{
			this.setState({show:!this.state.show});
		};
		
		this.onMarkerClick =(props, marker, e)=>{
			this.setState({
			   showingInfoWindow: true,
			   activeMarker:marker,
			   selectedPlace: props,
			})
		};
	}
	
	componentDidMount(){
			fetch('http://localhost:3000/locations')
			   .then(res=>res.json())
			   .then((result) => {
                       this.setState({
                          locations: result
                       });
                });
	}
	
   render(){
	   const{show, locations, showingInfoWindow, activeMarker, selectedPlace} = this.state;
	   switch(show){
		   case true:
		      	     return (
					    <>
						<button type='button' onClick={this.showHideMap}>HIDE MAP</button>
	                    <Map
                           google={google}
                           zoom={5}
                           initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
                        >
							{locations.map(l => (
                               <Marker key={l.venueName}
						          name={l.venueName}
                                  position={{ lat: l.venueLat, lng: l.venueLon }}
								  onClick={this.onMarkerClick}
                               />
                            ))}
							<InfoWindow
                                  marker={activeMarker}
                                  visible={showingInfoWindow}
							>
                                  <div>
                                     <h1>{selectedPlace.name}</h1>
                                  </div>
                            </InfoWindow>
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