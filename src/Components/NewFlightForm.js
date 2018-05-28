import React from 'react';
import { DatePickerInput } from 'rc-datepicker';


import 'rc-datepicker/lib/style.css';

export default class NewFlightForm extends React.Component {
  render () {
    return (
      <div>
        <h3>Please enter some flight info</h3>
        <form onSubmit={this.props.handleOutboundSubmit}>
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
            <DatePickerInput className='my-custom-datepicker-component' small={true} autoClose={true} value={this.props.outboundDepartureDate}
              name="outboundDepartureDate" onChange={this.props.handleOutboundDateChange}/>
            </label>

            <label>
            Airline:
              <select name="outboundAirline" onChange={this.props.handleChange}>
                <option> -- </option>
                {this.props.airlines.map((airline, i) => {
                  return (
                  <option key={i}> {airline} </option>
                  );
                  })}
              </select>
            </label>

            <label>
            Departure Time:
            <input type="text" name="outboundDepartureTime" onChange={this.props.handleChange} />
            </label>

          </div>
          <input type="submit" value='Add Flight' />
        </form>
        <form onSubmit={this.props.handleReturnSubmit}>
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
            <DatePickerInput className='my-custom-datepicker-component' name="returnDepartureDate" small={true} autoClose={true} value={this.props.returnDepartureDate} onChange={this.props.handleReturnDateChange}/>
            </label>

            <label>
            Airline:
              <select name="returnAirline" onChange={this.props.handleChange}>
                <option> -- </option>
                {this.props.airlines.map((airline, i) => {
                  return (
                  <option key={i}> {airline} </option>
                  );
                  })}
              </select>
            </label>

            <label>
            Departure Time:
            <input type="text" name="returnDepartureTime" onChange={this.props.handleChange} />
            </label>

          </div>
          <input type="submit" value='Add Flight' />
        </form>
      </div>
    )
  }

}
