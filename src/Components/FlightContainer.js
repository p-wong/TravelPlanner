import React from 'react';
import NewFlightForm from './NewFlightForm'
import Flight from './Flight'
import { Paper } from 'material-ui'

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
    return < NewFlightForm handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
           />
  }

  handleFormClicked = () => {
    this.setState({
      formClicked: !this.state.formClicked
    })
  }

  render () {
    console.log(this.props.styles)
    return (
      <Paper style={this.props.styles.mainContainer}>
        Here is the flight container.
        <button onClick={this.handleFormClicked}>Add a new flight</button>
        {this.state.formClicked ? this.renderNewFlightForm() : null}
        {this.renderFlights()}
      </Paper>
    )
  }

}
