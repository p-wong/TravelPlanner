import React from 'react';
import FlightContainer from './FlightContainer';
import AccommodationContainer from './AccommodationContainer';
import PackingContainer from './PackingContainer';
import { Grid } from 'material-ui'

export default class TripForm extends React.Component {

  styles = {
    mainContainer: {
      padding: 30, marginTop: 20, marginBottom: 10, marginLeft: 20, marginRight: 20
    },
  };

render () {

  return (

    <Grid container>
      <Grid item xs={12}>
        < FlightContainer styles={this.styles} />
      </Grid>
      <Grid item xs={12}>
        < AccommodationContainer styles={this.styles}/>
    </Grid>
    <Grid item xs={12}>
    {< PackingContainer styles={this.styles}/>}
    </Grid>

  </Grid>



)

}
}
