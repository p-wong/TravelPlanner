import React from 'react';
import OutboundFlight from './OutboundFlight';
import ReturnFlight from './ReturnFlight';

class FlightList extends React.Component {
  render () {
    return (
    <div className="ui raised segment">
    < OutboundFlight flight={this.props.outboundFlight} date={this.props.outboundDate} />
    < ReturnFlight flight={this.props.returnFlight} date={this.props.returnDate} />
    </div>
    )
  }
}



export default FlightList;
