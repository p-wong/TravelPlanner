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
    checked: false,
    editing: false,
    clothes: '',
    deleting: false,
  }

  handleFormClick = () => {
    this.setState({
      formClicked: !this.state.formClicked
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

  // newItem = () => {
  //   const listItem = {}
  //   listItem[this.state.currentCategory] = this.state.packingItem
  //   return listItem
  // }

  // handleItemSubmit = (event) => {
  //   event.preventDefault()
  //
  //   this.setState({
  //     packingList: [...this.state.packingList, this.newItem()]
  //   }, () => {
  //     this.setState({
  //
  //     })
  //   })
  // }

  handleItemSubmit = (event) => {
    event.preventDefault()

    // const categoryList = this.state.currentCategory.toLowerCase().concat('List')
    // console.log(typeof categoryList)
    // console.log(this.state.clothesList)
    // console.log(this.state.categoryList)

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

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleEditClick = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleEditChange = (event) => {
    this.setState({
      clothes: event.target.value
    })
  }

  handleEditSubmit = (key) => {
    const copy = [...this.state.clothesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1, this.state.clothes)
    this.setState({
      clothesList: copy,
      editing: !this.state.editing
    })
  }

  handleDeleteClick = (key) => {
    const copy = [...this.state.clothesList]
    const index = copy.indexOf(key)
    copy.splice(index, 1)
    this.setState({
      clothesList: copy
    })
  }

  renderClothes = () => {
    return (
      this.state.clothesList.map(clothes => {
        return (
          <span>
            <Checkbox checked={this.state.checked} onClick={this.handleCheck}/>
            {this.state.editing
              ?
              <form onSubmit={(e) => (e.preventDefault(), this.handleEditSubmit(clothes))}>
                <TextField placeholder={clothes} onChange={this.handleEditChange} />
                <IconButton type="submit" aria-label="Save"><Save /></IconButton>
              </form>
              :
              <Typography variant="body2">{clothes}</Typography>
            }
            <IconButton aria-label="Edit" onClick={this.handleEditClick}><EditIcon /></IconButton>
            <IconButton aria-label="Delete" onClick={() => this.handleDeleteClick(clothes)}><DeleteIcon /></IconButton>
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
          { this.renderPackingList() }
        </Paper>
      </div>
    )
  }
}

export default PackingContainer
