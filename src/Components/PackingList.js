import React from 'react'
import { Typography, Button, Paper, Grid, Icon, IconButton, Checkbox, TextField } from 'material-ui'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';

class PackingList extends React.Component {

  // renderListItem = () => {
  //   return (
  //     this.props.packingList.filter(item => {
  //       return (
  //         Object.keys(item) === 'Clothes'
  //       )
  //     })
  //   )
  // }

  renderPackingCategory = () => {
    const styles = {
      container: {
        'margin-top': '10px',
        'margin-left': '0px',
        'margin-right': '10px',
        'margin-bottom': '10px',
      },
      heading: {
        'padding': '10px'
      }
    };

    return (
      
      <Grid container spacing={12}>
      {this.props.categoryList.map(category => {
        return (
          <Grid item xs={6} sm={3}>
            <Paper style={styles.container}>
              <Typography variant="title" style={styles.heading}>{category}</Typography><br/>
              {category === "Clothes" ? this.props.renderClothes() :
              (category === "Toiletries" ? this.renderToiletries() :
              (category === "Electronics" ? this.renderElectronics() : this.renderMiscellaneous()))}
            </Paper>
          </Grid>
        )
      })}
      </Grid>
    )
  }



  renderToiletries = () => {
    return (
      this.props.toiletriesList.map(toiletries => {
        return (
          <span>
            <Checkbox checked={this.props.checked} onClick={this.handleCheck}/>
            <Typography variant="body2">{toiletries}</Typography>
            <IconButton aria-label="Edit"><EditIcon /></IconButton>
            <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
          </span>
        )
      })
    )
  }

  renderElectronics = () => {
    return (
      this.props.electronicsList.map(electronics => {
        return (
          <span>
            <Checkbox checked={this.props.checked} onClick={this.handleCheck}/>
            <Typography variant="body2">{electronics}</Typography>
            <IconButton aria-label="Edit"><EditIcon /></IconButton>
            <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
          </span>
        )
      })
    )
  }

  renderMiscellaneous = () => {
    return (
      this.props.miscellaneousList.map(miscellaneous => {
        return (
          <span>
            <Checkbox checked={this.props.checked} onClick={this.handleCheck}/>
            <Typography variant="body2">{miscellaneous}</Typography>
            <IconButton aria-label="Edit"><EditIcon /></IconButton>
            <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
          </span>
        )
      })
    )
  }

  render () {
    return (
      <div>
      {this.renderPackingCategory()}
      </div>
    )
  }
}

export default PackingList
