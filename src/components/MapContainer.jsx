import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			show: false,
		};
		this.handelShowPropertie = this.handelShowPropertie.bind(this)

	}

	
	
	handelShowPropertie(){
		if(this.state.show){
		this.setState({show: false});
		}else{
			this.setState({show: true});
		}
	}

	
	render() {if (this.state.show ){
		return(
			<>
				<button onClick={this.handelShowPropertie}>Hide the map</button>
				<Map
					google={this.props.google}
					zoom={5}
					initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
				>
					{this.props.markers.map(element =>(
					<Marker
						key={element.id}
						title={element.venueName}
						name={element.venueName}
						position={{ lat: element.venueLat, lng: element.venueLon }}
					/>
					))}
				</Map>
			</>
		);
	}else{
		return(
			<button onClick={this.handelShowPropertie}>Show the map</button>
		);
	}
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);