import React from 'react';
import FlightContainer from './FlightContainer';
import AccommodationContainer from './AccommodationContainer'

export default class Main extends React.Component {
  state = {
			flights: []
	  }

	render() {
		return (
			<div>
				This is the main container
        <FlightContainer />
        <AccommodationContainer />
			</div>
		)
	}
}
