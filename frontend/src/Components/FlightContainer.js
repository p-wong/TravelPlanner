import React from 'react';
import NewFlightForm from './NewFlightForm';
import FlightList from './FlightList';
import { Paper } from 'material-ui'

export default class FlightContainer extends React.Component {

    state = {
      flightSearchResults: [],
      outboundFlight: {},
      returnFlight: {},
      airlines: ['American Airlines', 'Delta Air Lines', 'United Airlines', 'Alaska Airlines', 'Sun Country Airlines'],
      flights: [],
      formClicked: false,
      flightNumber: '',
      outboundAirline: '',
      returnAirline: '',

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

    handleOutboundDateChange = (e) => {
      this.setState({
        outboundDepartureDate: e
      })
    }

    handleReturnDateChange = (e) => {
      this.setState({
        returnDepartureDate: e
      })
    }

    handleOutboundSubmit = (e) => {
      e.preventDefault();
      const depart = this.state.outboundDepartureCity;
      const arrive = this.state.outboundArrivalCity;
      const date = this.state.outboundDepartureDate.toISOString().split('T')[0].split('-').join('');
      fetch(`http://developer.goibibo.com/api/search/?app_id=1f3b1d0a&app_key=7d5cc7873609302a0b5eec7c28833580&format=json&source=${depart}&destination=${arrive}&dateofdeparture=${date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({ outboundFlight: json.data.onwardflights.filter(flight => flight.airline === this.state.outboundAirline && flight.deptime === this.state.outboundDepartureTime)[0] })
      })
      }

    handleReturnSubmit = (e) => {
      e.preventDefault();
      const depart = this.state.returnDepartureCity;
      const arrive = this.state.returnArrivalCity;
      const date = this.state.returnDepartureDate.toISOString().split('T')[0].split('-').join('');
      fetch(`http://developer.goibibo.com/api/search/?app_id=1f3b1d0a&app_key=7d5cc7873609302a0b5eec7c28833580&format=json&source=${depart}&destination=${arrive}&dateofdeparture=${date}&seatingclass=E&adults=1&children=0&infants=0&counter=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({ returnFlight: json.data.onwardflights.filter(flight => flight.airline === this.state.returnAirline && flight.deptime === this.state.returnDepartureTime)[0] })
      })
      }

    renderNewFlightForm = () => {
      return < NewFlightForm handleChange={this.handleChange} handleOutboundDateChange={this.handleOutboundDateChange} handleReturnDateChange={this.handleReturnDateChange} handleOutboundSubmit={this.handleOutboundSubmit} handleReturnSubmit={this.handleReturnSubmit} airlines={this.state.airlines} outboundAirline={this.state.outboundAirline} returnAirline={this.state.returnAirline} date={this.state.outboundDepartureDate}/>
    }

    handleFormClicked = () => {
      this.setState({
        formClicked: !this.state.formClicked
      })
    }

     render () {
       console.log(this.state)
       return (

         <Paper style={this.props.styles.mainContainer}>
        Here is the flight container.
        <button onClick={this.handleFormClicked}>Add a new flight</button>
        {this.state.formClicked ? this.renderNewFlightForm() : null}
        {this.state.outboundFlight ? < FlightList outboundFlight={this.state.outboundFlight} returnFlight={this.state.returnFlight} outboundDate={this.state.outboundDepartureDate} returnDate={this.state.returnDepartureDate}/> : alert('Oops, we didn\'t find any flights matching that search. Refresh the page and try again')}
      </Paper>
       )
     }
   }
