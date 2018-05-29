import React from 'react';

const ReturnFlight = (props) => {
    return (

      <table className="ui celled striped padded">
        <tbody>
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

export default ReturnFlight;
