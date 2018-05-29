import React from 'react';

const OutboundFlight = (props) => {
    console.log(props)
    return (
        <table className="ui celled striped padded">
          <tbody>
            <tr>
              <th>
                <h4 className="ui center aligned header">AIRLINE</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">ORIGIN</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">DATE</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">DEPART TIME</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">DESTINATION</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">ARRIVE TIME</h4>
              </th>
              <th>
                <h4 className="ui center aligned header">DURATION</h4>
              </th>
            </tr>


            <tr>
              <td>{props.flight.airline}</td>
              <td>{props.flight.origin}</td>
              <td>{props.date.toString().split(' ')[0]} {props.date.toString().split(' ')[1]} {props.date.toString().split(' ')[2]} {props.date.toString().split(' ')[3]}</td>
              <td>{props.flight.deptime}</td>
              <td>{props.flight.destination}</td>
              <td>{props.flight.arrtime}</td>
              <td>{props.flight.duration}</td>
            </tr>

          </tbody>
        </table>
    )
}

export default OutboundFlight;
