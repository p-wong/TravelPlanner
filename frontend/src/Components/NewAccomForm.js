import React from 'react';
import { Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField } from 'material-ui'


export default class NewAccomForm extends React.Component {

  renderAccomType = () => {
    return (this.props.accomType.map(accom => {
      return (
        <MenuItem value={accom}>
          {accom}
        </MenuItem>
      )
    }))
  }

  renderTime = () => {
    const today = new Date()

    const getMonth = today.getMonth()
    const dateMonth = ((getMonth + 1) < 10) ? ('0' + (getMonth+1)) : getMonth
    const date = today.getFullYear()+'-'+dateMonth+'-'+today.getDate()

    const getMinutes = today.getMinutes()
    const timeMinutes = (getMinutes < 10) ? ('0' + getMinutes) : getMinutes
    const time = today.getHours() + ":" + timeMinutes
    const datetime = date + "T" + time
    return datetime
  }

  // if hotel: enter hotel name, and address, checkin and checkout times
  // if airbnb: scrape for title and address, enter checkin and checkout times
  // if other, enter address, checkin and checkout times

  renderHotel = () => {

    return (
      <form className={this.props.styles.container} noValidate autoComplete="off" onSubmit={this.props.handleHotelSubmit}>
        <FormControl>
          <TextField id="required"
            label="Hotel"
            className={this.props.styles.textField}
            name='hotelName'
            onChange={this.props.handleChange}
            margin="none"
          />

          <TextField id="required"
            label="Address"
            className={this.props.styles.textField}
            name='hotelAddress'
            onChange={this.props.handleChange}
            margin="none"
          /> <br/>

          <TextField id="datetime-local" label="Check-In Date & Time" type="datetime-local"
                     name='checkInDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                     InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
          />

          <TextField id="datetime-local" label="Check-Out Date & Time" type="datetime-local"
                     name='checkOutDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                     InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
          /><br/>

          <input type='submit' value='Add Reservation' />
        </FormControl>
      </form>
    )
  }

  renderAirbnb = () => {
    return (
      <form onSubmit={this.props.handleAirbnbSubmit}>
        <br/>
        <label>
        Link to Airbnb:
        <input type='text' name='airbnbLink' onChange={this.props.handleChange} />
        </label>

        <TextField id="datetime-local" label="Check-In Date & Time" type="datetime-local"
                   name='checkInDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                   InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
        />

        <TextField id="datetime-local" label="Check-Out Date & Time" type="datetime-local"
                   name='checkOutDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                   InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
        />

        <input type='submit' value='Add Reservation' />
      </form>
    )
  }

  renderOther = () => {
    return (
      <form onSubmit={this.props.handleOtherSubmit}>
        <br/>
        <label>
        Accommodation Type:
        <input type='text' name='accommodationType' onChange={this.props.handleChange} />
        </label>

        <TextField id="datetime-local" label="Check-In Date & Time" type="datetime-local"
                   name='checkInDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                   InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
        />

        <TextField id="datetime-local" label="Check-Out Date & Time" type="datetime-local"
                   name='checkOutDate' defaultValue={this.renderTime()} className={this.props.styles.textField}
                   InputLabelProps={{shrink: true,}} onChange={this.props.handleChange}
        />

        <input type='submit' value='Add Reservation' />
      </form>
    )
  }

  render () {
    const styles = {
      customWidth: {
        width: 180,
      },
    };

    const { classes } = this.props;
    return (
      <div>
        <br/>
        <form className={this.props.styles.root} autoComplete="off" >
          <FormControl className={this.props.styles.formControl}>
            {/*<Typography variant="title">Please select your accommodation type</Typography>*/}
            <InputLabel htmlFor="" >Accommodation Type</InputLabel><br/>
              <Select value={this.props.currentAccom} onChange={this.props.handleCurrentAccomChange} style={styles.customWidth} >
                <MenuItem value=""><em>None</em></MenuItem>
                {this.renderAccomType()}
              </Select>
            </FormControl>
        </form>
        { this.props.currentAccom === 'Hotel'
        ? this.renderHotel()
        : ( this.props.currentAccom === 'Airbnb'
          ? this.renderAirbnb()
          :  ( this.props.currentAccom === 'Other'
            ? this.renderOther()
            :  null
          )
        )}

      </div>
    )
  }

}
