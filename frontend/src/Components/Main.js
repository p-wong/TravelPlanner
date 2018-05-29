import React from 'react';
import Trip from './Trip';

import TripForm from './TripForm';
// import {cyan500} from 'material-ui/styles/colors';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './Nav';
import axios from 'axios';
import update from 'immutability-helper'



class Main extends React.Component {

  // const muiTheme = function getMuiTheme(){
  //   palette: {
  //     textColor: cyan500,
  //   },
  //   appBar: {
  //     height: 50,
  //   },
  // });

  state= {
    trips: [],
    editingTripId: null,
    formShown: false
  }

  styles = {
    mainContainer: {
      padding: 30, marginTop: 20, marginBottom: 10, marginLeft: 20, marginRight: 20
    },
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/trips.json')
    .then(res => {this.setState({trips: res.data})})
    .catch(error => console.log(error))
  }

  addNewTrip = () => {
    axios.post('http://localhost:3001/api/v1/trips', {trip: {title: ''}})
    .then(res => {console.log(res)
      const trips= update(this.state.trips, { $splice: [[0, 0, res.data]]})
      this.setState({trips: trips, editingTripId: res.data.id})
    })
    .catch(error => console.log(error))
  }

  renderTripForm = () => {
    this.setState({formShown: !this.state.formShown})
  }

  render () {
    return(
      <div>
        < Nav />
      Trips:
        {this.state.trips.map(trip => {
            return(<Trip trip={trip} key={trip.id} addNewTrip={this.addNewTrip}/> )})
          }
      <button onClick={this.renderTripForm} > New Trip </button>

      {(this.state.formShown === true) ? < TripForm /> : null}

      </div>
    )
  }
}

export default Main;



// export default class Main extends React.Component {
//
//
//
// 	render() {
// 		return (
// 			<div>
//
// 				This is the main container
//
//
// 			</div>
// 		)
// 	}
// }
