import React from 'react';
import Flight from './Flight'
import NewFlightForm from './NewFlightForm'

export default class FlightContainer extends React.Component {

    state = {
      flightSearchResults: [],
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

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const depart = this.state.outboundDepartureCity;
      const arrive = this.state.outboundArrivalCity;
      const date = this.state.outboundDepartureDate;
      fetch(`http://developer.goibibo.com/api/search/?app_id=1f3b1d0a&app_key=7d5cc7873609302a0b5eec7c28833580&format=json&source=${depart}&destination=${arrive}&dateofdeparture=${date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({ flightSearchResults: json.data.onwardflights });
      })
    }

    // NOTE: THIS FIND MATCHING FLIGHTS FEATURE IS NOT WORKING RIGHT NOW, NEEDS TO BE INVOKED SOMEWHERE OTHER THAN RENDER FLIGHTS I THINK

    findMatchingFlights = () => {
      const filteredFlights = this.state.flightSearchResults.filter(flight => {
        return (flight.origin === this.state.outboundDepartureCity && flight.destination === this.state.outboundArrivalCity)
      })
      this.setState({flights: filteredFlights});
    }

    renderFlights = () => {
      this.findMatchingFlights;
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
       console.log(this.state)
       return (
         <div>
        Here is the flight container.
        <button onClick={this.handleFormClicked}>Add a new flight</button>
        {this.state.formClicked ? this.renderNewFlightForm() : null}
        {this.renderFlights()}
        </div>
       )
     }}
