import React from 'react';

export default class NewFlightForm extends React.Component {
  render () {
    return (
      <div>
        <h3>Please enter some flight info</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label>
          Flight Number:
          <input type="text" name="flightNumber" onChange={this.props.handleChange} />
          </label>

          <div>
            <p>Outbound Flight</p>
            <label>
            Departure City:
            <input type="text" name="outboundDepartureCity" onChange={this.props.handleChange} />
            </label>

            <label>
            Arrival City:
            <input type="text" name="outboundArrivalCity" onChange={this.props.handleChange} />
            </label>

            <label>
            Departure Date:
            <input type="text" name="outboundDepartureDate" onChange={this.props.handleChange} />
            </label>
          </div>

          <div>
            <p>Return Flight</p>
            <label>
            Departure City:
            <input type="text" name="returnDepartureCity" onChange={this.props.handleChange} />
            </label>

            <label>
            Arrival City:
            <input type="text" name="returnArrivalCity" onChange={this.props.handleChange} />
            </label>

            <label>
            Departure Date:
            <input type="text" name="returnDepartureDate" onChange={this.props.handleChange} />
            </label>

          </div>
          <input type="submit" value='Add Flight' />
        </form>
      </div>
    )
  }

}
