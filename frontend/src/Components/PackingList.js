import React from 'react'
import { Typography, Paper, Grid, IconButton, Checkbox} from 'material-ui'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
    return (
      this.props.categoryList.map(category => {
        return (
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Paper>{category}</Paper>
              {category === "Clothes" ? this.props.renderClothes() :
                (category === "Toiletries" ? this.renderToiletries() :
                  (category === "Electronics" ? this.renderElectronics() :
                    this.renderMiscellaneous()))}
            </Grid>
          </Grid>
        )
      })
    )
  }



  renderToiletries = () => {
    return (
      this.props.toiletriesList.map(toiletries => {
        return (
          <span>
            <Checkbox checked={this.state.checked} onClick={this.handleCheck}/>
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
            <Checkbox checked={this.state.checked} onClick={this.handleCheck}/>
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
            <Checkbox checked={this.state.checked} onClick={this.handleCheck}/>
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
