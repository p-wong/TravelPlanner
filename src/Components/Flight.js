import React from 'react';

export default class Flight extends React.Component {
  render () {
    return (
      <form>
          <label>Enter Flight Number:</label>
          <input
            id="flight number"
            type="text"
            value={this.props.flightNumber}
            onChange={this.props.handleEdit}
          />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
