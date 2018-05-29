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
            <h4>Outbound Flight</h4>
            <label>
            Departure City:
            <input type="text" name="outboundDepartureCity" onChange={this.props.handleChange} />
            </label>
            <br></br>
            <label>
            Arrival City:
            <input type="text" name="outboundArrivalCity" onChange={this.props.handleChange} />
            </label>
            <br></br>
            <label>
            Departure Date:
            <DatePickerInput className='calendar' small={true} autoClose={true} name="outboundDepartureDate" onChange={this.props.handleOutboundDateChange}/>
            </label>
            <br></br>
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
            <br></br>
            <label>
            Departure Time:
            <input type="time" name="outboundDepartureTime" onChange={this.props.handleChange} />
            </label>

          </div>
          <input className="button" type="submit" value='Add Flight' />
        </form>
        <form onSubmit={this.props.handleReturnSubmit}>
          <div>
            <h4>Return Flight</h4>
            <label>
            Departure City:
            <input type="text" name="returnDepartureCity" onChange={this.props.handleChange} />
            </label>
            <br></br>
            <label>
            Arrival City:
            <input type="text" name="returnArrivalCity" onChange={this.props.handleChange} />
            </label>
            <br></br>
            <label>
            Departure Date:
            <DatePickerInput className='calendar' name="returnDepartureDate" small={true} autoClose={true} value={this.props.returnDepartureDate} onChange={this.props.handleReturnDateChange}/>
            </label>
            <br></br>
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
            <br></br>
            <label>
            Departure Time:
            <input type="time" name="returnDepartureTime" onChange={this.props.handleChange} />
            </label>

          </div>
          <input className="button" type="submit" value='Add Flight' />
        </form>
      </div>
    )
  }

}
