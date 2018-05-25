import React from 'react';
import Flight from './Flight'

export default class FlightContainer extends React.Component {

  state = {
    flightNumber: ''
  }

  handleEdit = (event) => {
    this.setState({
      flightNumber: event.target.value
    })
  }

  render () {
    return (
      <div>
      Here is the flight container:
      <Flight flightNumber={this.state.flightNumber} handleEdit={this.handleEdit}/>
      </div>
    )
  }

}
