import React from 'react';
import { Typography } from 'material-ui'


export default class Accommodation extends React.Component {

  renderHotels = () => {
    return (this.props.hotelReservations.map (reso => {
      return (
        <span>
          <br/>
          <Typography variant="display2">{reso.hotelName}</Typography>
          <Typography variant="title">Address: {reso.hotelAddress}</Typography>
          <Typography variant="title">Check In: {reso.checkInDate}</Typography>
          <Typography variant="title">Check Out: {reso.checkOutDate}</Typography>
        </span>
      )
    }))
  }

  renderAirbnbs = () => {
    return (this.props.airbnbReservations.map (reso => {
      return (
        <span>
          <p>{reso.airbnbLink}</p>
          <p>Check In: {reso.checkInDate}</p>
          <p>Check Out: {reso.checkOutDate}</p>
        </span>
      )
    }))
  }

  renderOthers = () => {
    return (this.props.otherReservations.map (reso => {
      return (
        <span>
          <p>{reso.accommodationType}</p>
          <p>Check In: {reso.checkInDate}</p>
          <p>Check Out: {reso.checkOutDate}</p>
        </span>
      )
    }))
  }

  render () {
    return (
      <div>
        {this.renderHotels()}
        {this.renderAirbnbs()}
        {this.renderOthers()}
      </div>
    )
  }

}
