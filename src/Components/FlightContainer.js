import React from 'react';
<<<<<<< HEAD
=======
import NewFlightForm from './NewFlightForm'
>>>>>>> ef7c17da33a7a3d8dfdb8a7d903cda08244fe446
import Flight from './Flight'

export default class FlightContainer extends React.Component {

  state = {
<<<<<<< HEAD
    flightNumber: ''
  }

  handleEdit = (event) => {
    this.setState({
      flightNumber: event.target.value
=======
    flights: [],
    formClicked: false,
    flightNumber: '',

    outboundDepartureCity: '',
    outboundDepartureDate: '',
    outboundDepartureTime: '',

    outboundArrivalCity: '',
    outboundArrivalDate: '',
    outboundArrivalTime: '',

    returnDepartureCity: '',
    returnDepartureDate: '',
    returnDepartureTime: '',

    returnArrivalCity: '',
    returnArrivalDate: '',
    returnArrivalTime: '',
  }

  handleChange = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  renderFlights = () => {
    return < Flight />
  }

  renderNewFlightForm = () => {
    return < NewFlightForm handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
           />
  }

  handleFormClicked = () => {
    this.setState({
      formClicked: !this.state.formClicked
>>>>>>> ef7c17da33a7a3d8dfdb8a7d903cda08244fe446
    })
  }

  render () {
    return (
      <div>
<<<<<<< HEAD
      Here is the flight container:
      <Flight flightNumber={this.state.flightNumber} handleEdit={this.handleEdit}/>
=======
      Here is the flight container.
      <button onClick={this.handleFormClicked}>Add a new flight</button>
      {this.state.formClicked ? this.renderNewFlightForm() : null}
      {this.renderFlights()}
>>>>>>> ef7c17da33a7a3d8dfdb8a7d903cda08244fe446
      </div>
    )
  }

}
