import React from 'react'
import { connect } from 'react-redux';
import MapContainer from '../components/MapContainer'
import useInitialState from '../Hooks/useInitialState';
import './styles/Home.css'

const Home = (props) => {
  const API = 'http://localhost:3000/locations'
  const data = useInitialState(API)
  const {show} = props
  return (
    <div>
      <MapContainer locations={data} show={show} />
    </div>
)
}

const mapStateToProps = (state) => {
  return {
      show: state.show,
      locations: state.locations
  };
};

export default connect(mapStateToProps, null)(Home);