import React from 'react';
import Flight from './Flight'
import NewFlightForm from './NewFlightForm'

export default class FlightContainer extends React.Component {

    state = {
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
      return < NewFlightForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    }

    handleFormClicked = () => {
      this.setState({
        formClicked: !this.state.formClicked
      })
    }

     render () {
       return (
         <div>
        Here is the flight container.
        <button onClick={this.handleFormClicked}>Add a new flight</button>
        {this.state.formClicked ? this.renderNewFlightForm() : null}
        {this.renderFlights()}
        </div>
       )
     }}
