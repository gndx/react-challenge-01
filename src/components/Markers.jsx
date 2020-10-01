import React from 'react';

import { Marker, InfoWindow } from 'google-maps-react';

const Markers = ({ data }) => {
  console.log(data);

  const markers = data.map((location, id) => {
    return (
      <Marker
        key={id}
        position={{ lat: location.venueLat, lng: location.venueLon }}
      >
        <InfoWindow>
          <h1>{location.venueName}</h1>
        </InfoWindow>
      </Marker>
    );
  });
  return markers;
  // return data.map((l, id) => {
  //   return <Marker key={id} position={[location]} />;
  // });
};

export default Markers;
