import React from 'react'
import { Typography, Button, Paper, Grid, Icon, IconButton, Checkbox, TextField } from 'material-ui'
import PackingList from './PackingList'
import PackingListForm from './PackingListForm'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';

class PackingContainer extends React.Component {
  state = {
    formClicked: false,
    packingList: [],
    categoryList: ['Clothes', 'Toiletries', 'Electronics', 'Miscellaneous'],
    packingItem: '',
    currentCategory: '',
    clothesList: [],
    toiletriesList: [],
    electronicsList: [],
    miscellaneousList: [],
    editing: false,
    deleting: false,
    clothes: '',
    toiletries: ''
  }

  //---------------------------------------------------------------------------------------------------------
  // ADDING ITEMS TO EACH CATEGORY LIST

  handleFormClick = () => {
    this.setState({
      formClicked: !this.state.formClicked
    })
  }

  handleEditClick = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleCurrentCategory = (event) => {
    this.setState({
      currentCategory: event.target.value
    })
  }

  handleItemChange = (event) => {
    this.setState({
      packingItem: event.target.value
    })
  }

  handleItemSubmit = (event) => {
    event.preventDefault()

    this.state.currentCategory === 'Clothes' ?
    this.setState({
      clothesList: [...this.state.clothesList, this.state.packingItem]
    })
      :
      (this.state.currentCategory === 'Toiletries' ?
      this.setState({
        toiletriesList: [...this.state.toiletriesList, this.state.packingItem]
      })
        :
        (this.state.currentCategory === 'Electronics' ?
        this.setState({
          electronicsList: [...this.state.electronicsList, this.state.packingItem]
        })
        : this.setState({
          miscellaneousList: [...this.state.miscellaneousList, this.state.packingItem]
          })
        )
    )
  }


  //---------------------------------------------------------------------------------------------------------
  // EDIT / DELETE FOR CLOTHES LIST

  handleEditToiletriesChange = (event) => {
    this.setState({
      toiletries: event.target.value
    })
  }

  handleEditToiletriesSubmit = (key) => {
    const copy = [...this.state.toiletriesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1, this.state.toiletries)
    this.setState({
      toiletriesList: copy,
      editing: !this.state.editing
    })
  }

  handleDeleteToiletriesClick = (key) => {
    const copy = [...this.state.toiletriesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1)
    this.setState({
      toiletriesList: copy
    })
  }

  renderToiletries = () => {
    let styles = {
      heading: {
        'padding': '10px'
      }
    };
    return (
      this.state.toiletriesList.map(toiletries => {
        return (
          <span>
            {this.state.editing
              ?
              <form onSubmit={(e) => (e.preventDefault(), this.handleEditToiletriesSubmit(toiletries))}>
                <TextField placeholder={toiletries} onChange={this.handleEditToiletriesChange} />
                <IconButton type="submit" aria-label="Save"><Save /></IconButton>
              </form>
              :
              <Typography variant="title" style={styles.heading}>{toiletries}</Typography>
            }
            <IconButton aria-label="Edit" onClick={this.handleEditClick}><EditIcon /></IconButton>
            <IconButton aria-label="Delete" onClick={() => this.handleDeleteToiletriesClick(toiletries)}><DeleteIcon /></IconButton>
          </span>
        )
      })
    )
  }

  //---------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------
  // EDIT / DELETE FOR CLOTHES LIST


  handleEditClothesChange = (event) => {
    this.setState({
      clothes: event.target.value
    })
  }

  handleEditClothesSubmit = (key) => {
    const copy = [...this.state.clothesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1, this.state.clothes)
    this.setState({
      clothesList: copy,
      editing: !this.state.editing
    })
  }

  handleDeleteClothesClick = (key) => {
    const copy = [...this.state.clothesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1)
    this.setState({
      clothesList: copy
    })
  }

  renderClothes = () => {
    let styles = {
      heading: {
        'padding': '10px'
      }
    };
    return (
      this.state.clothesList.map(clothes => {
        return (
          <span>
            {this.state.editing
              ?
              <form onSubmit={(e) => (e.preventDefault(), this.handleEditClothesSubmit(clothes))}>
                <TextField placeholder={clothes} onChange={this.handleEditClothesChange} />
                <IconButton type="submit" aria-label="Save"><Save /></IconButton>
              </form>
              :
              <Typography variant="title" style={styles.heading}>{clothes}</Typography>
            }
            <IconButton aria-label="Edit" onClick={this.handleEditClick}><EditIcon /></IconButton>
            <IconButton aria-label="Delete" onClick={() => this.handleDeleteClothesClick(clothes)}><DeleteIcon /></IconButton>
          </span>
        )
      })
    )
  }

  //---------------------------------------------------------------------------------------------------------

  renderPackingListForm = () => {
    return (
      < PackingListForm currentCategory={this.state.currentCategory}
                        handleCurrentCategory={this.handleCurrentCategory}
                        categoryList={this.state.categoryList}
                        packingItem={this.state.packingItem}
                        handleItemChange={this.handleItemChange}
                        handleItemSubmit={this.handleItemSubmit}
                        />
    )
  }

  renderPackingList = () => {
    return (
      < PackingList packingList={this.state.packingList}
                    categoryList={this.state.categoryList}
                    clothesList={this.state.clothesList}
                    toiletriesList={this.state.toiletriesList}
                    electronicsList={this.state.electronicsList}
                    miscellaneousList={this.state.miscellaneousList}
                    renderClothes={this.renderClothes}
                    renderToiletries={this.renderToiletries}
                    />
    )
  }

  //
  // renderListItem = () => {
  //   let arrays = []
  //
  //   arrays = this.state.packingList.map(item => {
  //     return Object.keys(item)
  //   })
  //
  //   const flattened = [].concat.apply([], arrays)
  //   return flattened
  // }

  render () {
    console.log(this.state.clothes)
    return (
      <div>
        <Paper style={this.props.styles.mainContainer}>
          <Typography variant="display1">Packing List</Typography>
          <Button variant="raised" onClick={this.handleFormClick}>Add an item</Button>
          { this.state.formClicked ? this.renderPackingListForm() : null}
          <br/>
          { this.renderPackingList() }
        </Paper>
      </div>
    )
  }
}

export default PackingContainer
