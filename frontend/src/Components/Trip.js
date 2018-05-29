import React from 'react';

export default class Trip extends React.Component {
  render () {
    return (
      <div>
      {this.props.trip.title}
      </div>

    )
  }
}
