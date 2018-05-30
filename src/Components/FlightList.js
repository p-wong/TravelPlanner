import React from 'react';
import OutboundFlight from './OutboundFlight';
import ReturnFlight from './ReturnFlight';

class FlightList extends React.Component {
  render () {
    return (
      <div>
        <table className="ui celled striped padded">
          <tbody>
      <tr>
        <th>
          <h5 className="ui left aligned header">AIRLINE</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">ORIGIN</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">DATE</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">DEPART TIME</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">DESTINATION</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">ARRIVE TIME</h5>
        </th>
        <th>
          <h5 className="ui left aligned header">DURATION</h5>
        </th>
  </tr>

    < OutboundFlight flight={this.props.outboundFlight} date={this.props.outboundDate} />
    < ReturnFlight flight={this.props.returnFlight} date={this.props.returnDate} />



</tbody>
</table>
</div>
    )
  }
}



export default FlightList;
