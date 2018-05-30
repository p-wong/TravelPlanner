import React from 'react'
import { Typography, FormControl, InputLabel, Select, MenuItem, Input } from 'material-ui'

class PackingListForm extends React.Component {

  renderCategoryList = () => {
    return (this.props.categoryList.map(category => {
      return (<MenuItem value={category}>{category}</MenuItem>)
    })
  )}

  renderSelect = () => {
    const styles = {
      customWidth: {
        width: 180,
      },
    };
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="">Category</InputLabel>
          <Select value={this.props.currentCategory} onChange={this.props.handleCurrentCategory} style={styles.customWidth} >
            <MenuItem value=""><em>None</em></MenuItem>
            {this.renderCategoryList()}
          </Select>
        </FormControl>
      </form>
    )
  }

  renderPackingItem = () => {
    return (
      <form autoComplete="off" onSubmit={this.props.handleItemSubmit}>
        <FormControl>
          <InputLabel htmlFor="packingItem">Item</InputLabel>
          <Input id="packingItem" name={this.props.currentCategory} onChange={this.props.handleItemChange} />
          <input type="submit" value="Submit" />
        </FormControl>
      </form>
    )
  }


  render () {
    return (
      <div>
        <br/>
        <Typography variant="title">Enter an Item</Typography>
        <br/>
        {this.renderSelect()}
        {this.renderPackingItem()}
      </div>
    )
  }
}

export default PackingListForm
