import React from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LoginBar from './LoginBar';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import AuthPanel from "./AuthPanel";
import AddCard from "./AddCard";
import Avatar from 'material-ui/lib/avatar';

export default class Navbar extends React.Component {

  handleCategory(event, index, value) {
    this.props.categorySelect(value);
  }

  handleToggle(e) {
    const toggleFilter = e.target.value;
    window.setTimeout(
      function(){
      this.props.stateToggle(toggleFilter);}.bind(this),
      0
    );
  }

   displayAddPostButton(){
    if (!(this.props.currentUser) ){
      return {
        display:'none'
      };
    }
    else {
      return;
    }
  }

  avatarStyle(){
    if (!this.props.currentAvatar){
      return {
        display:'none'
      };
    }
    else {
      return {
        margin:'auto'
      };
    }
  }

  showLogin() {
    if ((this.props.currentUser) ){
      return {
        display:'none'
      };
    }
  }

  showLogout() {

    if (!(this.props.currentUser) ){
      return {
        display:'none'
      };
    }
  }

  handleShowSignup() {
    this.props.toggleSignup();
  }

  handleShowLogin() {
    this.props.toggleLogin();
  }

  handleShowAdd() {
    this.props.stateToggle('showAdd');
    this.props.stateToggle('showHead');
  }

  render () {
    const styles = {
      title: {
        fontFamily: 'MasterOfBreak',
        color: "red",
        minWidth: 160,
        maxWidth: 160,
        fontWeight: 700,
        fontSize: "30px",
        marginRight: 0,
        paddingLeft: 12,
      },

      dropdown: {
        marginRight: 100,
      },

      toolbar: {
        color: "black",
        fill: 'black',
      },

      checkbox: {
        maxWidth: 150,
        marginTop: 16,
      },

    };

    return (
      <Toolbar style={styles.toolbar}>
        <Avatar src = {this.props.currentAvatar} float = 'left' style = {this.avatarStyle.bind(this).call()} size = {55}/>
        <ToolbarTitle style={styles.title} text="YumSnap!"/>
        <ToolbarGroup firstChild={true} float="left">
          <DropDownMenu style={styles.dropdown} iconStyle={{fill: 'black'}} labelStyle={{fontSize: '18', fontWeight: 'bold', textDecoration: 'underline'}} value={this.props.category} onChange={this.handleCategory.bind(this)}>
              <MenuItem value={null} primaryText="All"/>
              <MenuItem value={1} primaryText="Mexican"/>
              <MenuItem value={2} primaryText="American"/>
              <MenuItem value={3} primaryText="Asian"/>
              <MenuItem value={4} primaryText="Italian"/>
              <MenuItem value={5} primaryText="BBQ"/>
          </DropDownMenu>

          <Checkbox
            value="veg"
            onClick={this.handleToggle.bind(this)}
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            value="gf"
            label="Gluten-free"
            onClick={this.handleToggle.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            value="noSpice"
            label="Not-Spicy"
            onClick={this.handleToggle.bind(this)}
            style={styles.checkbox}
          />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <RaisedButton
            linkButton={true}
            href={"/logout"}
            label='Logout'
            style = {this.showLogout.bind(this).call()}
          />
          <RaisedButton onClick={this.handleShowAdd.bind(this)}
                        label={!this.props.showAdd ? "ADD DISH" : "CANCEL"}
                        backgroundColor="#7ec0ee"
                        style={this.displayAddPostButton.bind(this).call()}
          />
          <RaisedButton
            linkButton={true}

            label='Signup'
            style = {this.showLogin.bind(this).call()}
            onClick = {this.handleShowSignup.bind(this)}
          />
          <RaisedButton
            linkButton={true}

            label='Login'
            style = {this.showLogin.bind(this).call()}
            onClick = {this.handleShowLogin.bind(this)}
          />
          <div style={styles.socialbtns}>
            <div className="superbutton">
            <a href="/auth/github"
               class="btn btn-social-icon btn-lg  btn-github"
               style = {this.showLogin.bind(this).call()}>
               <span
               class="fa fa-github">
               </span>
            </a>
            <a href="/auth/google" class="btn btn-social-icon btn-lg btn-google" style = {this.showLogin.bind(this).call()}><span class="fa fa-google"></span> </a>
            <a href="/auth/twitter" class="btn btn-social-icon btn-lg btn-twitter" style = {this.showLogin.bind(this).call()}><span class="fa fa-twitter"></span> </a>
            </div>
          </div>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
