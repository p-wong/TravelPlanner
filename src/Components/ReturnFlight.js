import React from 'react';

const ReturnFlight = (props) => {
    return (
      <div>
        YOUR RETURN FLIGHT INFO:
        <p>Airline: {props.flight.airline}</p>
        <p>Depart From: {props.flight.origin} AT {props.flight.deptime} ON {props.date.split('T')[0].split('-')[1]} / {props.date.split('T')[0].split('-')[2]} / {props.date.split('T')[0].split('-')[0]} </p>
        <p>Arrive At: {props.flight.destination} AT {props.flight.arrtime}</p>
        <p>Flight Duration: {props.flight.duration}</p>
      </div>
    )
}

export default ReturnFlight;
