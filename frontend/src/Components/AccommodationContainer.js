import React from 'react';
import NewAccomForm from './NewAccomForm'
import Accommodation from './Accommodation'
import { Paper, Typography, Button } from 'material-ui'

export default class AccommodationContainer extends React.Component {

  state = {
    accomType: ['Hotel', 'Airbnb', 'Other'],
    currentAccom: '',

    accommodations: {},
    formClicked: false,

    checkInDate: '',
    checkOutDate: '',

    hotelName: '',
    hotelAddress: '',

    airbnbLink: '',

    accommodationType: '',

    hotelReservations: [],

    airbnbReservations: [],

    otherReservations: []

  }

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      // margin: theme.spacing.unit,
      minWidth: 200,
    },
    selectEmpty: {
      // marginTop: theme.spacing.unit * 2,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit,
      width: 200,
    },
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getCurrentAccom = (input) => {
    this.setState({
      currentAccom: input
    })
  }


  handleCurrentAccomChange = (event) => {
    this.setState({
      currentAccom: event.target.value
    })
  }

  handleHotelSubmit = (event) => {
    event.preventDefault()
    const newReservation = {
      hotelName: this.state.hotelName,
      hotelAddress: this.state.hotelAddress,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate,
    }
    this.setState({
      hotelReservations: [...this.state.hotelReservations, newReservation]
    }, () => {
      this.setState({
        currentAccom: '',
        formClicked: !this.state.formClicked
      })
    })
  }

  handleAirbnbSubmit = (event) => {
    event.preventDefault()
    const newReservation = {
      airbnbLink: this.state.airbnbLink,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate,
    }
    this.setState({
      airbnbReservations: [...this.state.airbnbReservations, newReservation]
    }, () => {
      this.setState({
        currentAccom: '',
        formClicked: !this.state.formClicked
      })
    })
  }

  handleOtherSubmit = (event) => {
    event.preventDefault()
    const newReservation = {
      accommodationType: this.state.accommodationType,
      checkInDate: this.state.checkInDate,
      checkOutDate: this.state.checkOutDate,
    }
    this.setState({
      otherReservations: [...this.state.otherReservations, newReservation]
    }, () => {
      this.setState({
        currentAccom: '',
        formClicked: !this.state.formClicked
      })
    })
  }

  renderAccommodations = () => {
    return < Accommodation hotelReservations={this.state.hotelReservations}
                           airbnbReservations={this.state.airbnbReservations}
                           otherReservations={this.state.otherReservations}
          />
  }

  renderNewAccomForm = () => {
    return < NewAccomForm handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                          accomType={this.state.accomType}
                          handleHotelSubmit={this.handleHotelSubmit}
                          handleAirbnbSubmit={this.handleAirbnbSubmit}
                          handleOtherSubmit={this.handleOtherSubmit}
                          handleCurrentAccomChange={this.handleCurrentAccomChange}
                          currentAccom={this.state.currentAccom}
                          styles={this.styles}
           />
  }

  handleFormClicked = () => {
    this.setState({
      formClicked: !this.state.formClicked
    })
  }

  render () {

    return (
      <Paper style={this.props.styles.mainContainer}>
        <Typography variant="display1">Accommodations</Typography>
        <Button variant="raised" onClick={this.handleFormClicked}>Add a reservation</Button>
        {this.state.formClicked ? this.renderNewAccomForm() : null}
        {(this.state.hotelReservations.length > 0 || this.state.airbnbReservations.length > 0 || this.state.otherReservations.length > 0) ? this.renderAccommodations() : null}
      </Paper>
    )
  }

}
