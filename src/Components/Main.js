import React from 'react';
import FlightContainer from './FlightContainer';
import AccommodationContainer from './AccommodationContainer'
import PackingContainer from './PackingContainer'
// import {cyan500} from 'material-ui/styles/colors';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Nav from './Nav'
import { Grid, Paper, Button } from 'material-ui'

class Main extends React.Component {

  // const muiTheme = function getMuiTheme(){
  //   palette: {
  //     textColor: cyan500,
  //   },
  //   appBar: {
  //     height: 50,
  //   },
  // });

  styles = {
    mainContainer: {
      padding: 30, marginTop: 20, marginBottom: 10, marginLeft: 20, marginRight: 20
    },
  };

  render () {
    return(
      <div>
        <Nav />
        <Grid container>
          <Grid item xs={12}>
            <AccommodationContainer styles={this.styles}/>
          </Grid>
          <Grid item xs={12}>
            {<PackingContainer styles={this.styles}/>}
          </Grid>
          <Grid item xs={12}>
            {/*<FlightContainer styles={this.styles}/>*/}
          </Grid>
        </Grid>
      </div>
    )
  }
};

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
