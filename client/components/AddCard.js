import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';
import Dropzone from "react-dropzone";
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class AddCard extends React.Component {

    handleDishName(e) {
    this.props.dishNameInput(e.target.value);
  }

  handleRestaurantName(e) {
    this.props.restaurantNameInput(e.target.value);
  }

  handleDishPrice(e) {
    this.props.dishPriceInput(e.target.value);
  }

  handleDishRating(e) {
    this.props.dishRatingInput(e.target.value);
  }

  handleVegClick() {
    window.setTimeout(this.props.vegInput, 0);
  }

  handleGFClick() {
    window.setTimeout(this.props.gfInput, 0);
  }

  handleSpicyClick() {
    window.setTimeout(this.props.spicyInput, 0);
  }

  handleSubmit() {
    this.props.addCardSubmit();
  }

  handlePhoto(e) {
    this.props.photoAdd(e.target.value);
  }

  handleCatSelect(event, index, value) {
    this.props.catAdd(value);
  }

  render() {

    const styles = {
      checkbox: {
        maxWidth: 150,
        marginTop: 16,
      },

      block: {
        display: 'inline-block',
        paddingLeft: 10,
      },

      text: {
        padding: 5
      },

      dropdown: {
        marginRight: 100,
        width: 30,
      },

      catError: {
        color:'red'
      }

    };

    return (
      <div style={styles.block}>

        <div style={styles.boxes}>
          <DropDownMenu value={this.props.dishCat} onChange={this.handleCatSelect.bind(this)}>
            <MenuItem value={999} primaryText="Select Style of Food"/>
            <MenuItem value={1} primaryText="Mexican"/>
            <MenuItem value={2} primaryText="American"/>
            <MenuItem value={3} primaryText="Asian"/>
            <MenuItem value={4} primaryText="Italian"/>
            <MenuItem value={5} primaryText="BBQ"/>
          </DropDownMenu><br/>
        <row>
          <span style={{float: "left"}} style= {styles.catError} >
              {this.props.catError ? "Restaurant Catagory required":""}
          </span>
        </row>
        <br/>
          <TextField
            onChange={this.handlePhoto.bind(this)}
            floatingLabelText="Enter URL for your photo"
            errorText={this.props.photoError}
          /><br/>
          <TextField
            onChange={this.handleDishName.bind(this)}
            floatingLabelText="Enter Name of Dish"
            errorText={this.props.dishNameError}
          /><br/>
          <TextField
            onChange={this.handleRestaurantName.bind(this)}
            floatingLabelText="Enter Name of Restaurant"
            errorText={this.props.restaurantError}
          /><br/>
          <TextField
            onChange={this.handleDishPrice.bind(this)}
            floatingLabelText="Enter Price of Dish"
            errorText={this.props.priceError}
          /><br/>
          <TextField
            onChange={this.handleDishRating.bind(this)}
            floatingLabelText="Enter Your Rating of Dish"
            errorText={this.props.ratingError}
          /><br/>
          <Checkbox
            onClick={this.handleVegClick.bind(this)}
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            label="Gluten-free"
            onClick={this.handleGFClick.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            label="Spicy"
            onClick={this.handleSpicyClick.bind(this)}
            style={styles.checkbox}
          /><br/>
          <RaisedButton onClick={this.handleSubmit.bind(this)} label="Submit" default={true} />
        </div>

        <hr/>
      </div>
    );
  }
}
