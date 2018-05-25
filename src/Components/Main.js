import React from 'react';
import FlightContainer from './FlightContainer';
import AccommodationContainer from './AccommodationContainer'
import NewFlightForm from './NewFlightForm'

export default class Main extends React.Component {
  state = {
			flights: []
	  }

	render() {
		return (
			<div>
				This is the main container
        <FlightContainer />
        <NewFlightForm />
        <AccommodationContainer />
			</div>
		)
	}
}
