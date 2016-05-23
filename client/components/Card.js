import React from "react";
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import moment from 'moment';

export default class DishCard extends React.Component {

  handleDeleteCard(stuff){
    this.props.deleteCard(this.props.data);
  }

  displayDeleteButton(){
    if (!(this.props.currentUser == this.props.data.user_id) ){
      return {
        display:'none'
      };
    }
    else {
      return {
        position: "absolute",
        right: 10,
        bottom: 10
      };
    }
  };

  displayFilledStars(){
    var starString="";
    for (var i = 0; i < this.props.data.rating; i++){
      starString += "✮";
    }
    return starString;
  };

  displayEmptyStars(){
    var starString = "";
    for (var i = 0; i < (5 - this.props.data.rating); i++){
      starString += "✩";
    }
    return starString;
  };

  profilepicture(){
    if (this.props.data.profile_picture){
      return this.props.data.profile_picture;
    }
    else{
    return "http://lorempixel.com/200/200/";
    }
  }

  render() {

    const cardStyle = {
      padding: "30px",
      height: "700px",
      position: "relative",
    };

    const imageStyle = {
      width: "100%",
      maxHeight: "360px",
      width: "auto",
    };

    const cardMediaStyle = {
      height: "370px"
    };

    const cardWrapperStyle = {
      display: "block",
      borderBottom: '30px solid',
      borderTop: '30px solid',
      borderColor: '#36454f',

      backgroundColor: "#36454f"
    };

    //not in use I pasted into function above
    const buttonStyle = {
      position: "absolute",
      right: 10,
      bottom: 10
    };

    const timeStamp = {
      position: "absolute",
      right: 8,
      top: 8,
      color: 'gray'
    };

    const iconStyle = {
      position: "absolute",
      left: 10,
      bottom: 10,
      fontSize:20
    };
    const starsStyle = {
       color: 'blue',
       fontSize:20
    };
    const emptyStarStyle = {
        color: 'black',
        fontSize: 20
    };
    const titleSize = {
      fontSize: 13
    };

    return (
      <div className="cardWrapper col-sm-6 col-lg-4" style={cardWrapperStyle}>
        <Card
          className=""
          style={cardStyle}>
          <CardHeader
            title={this.props.data.user}
            subtitle={"Category: "+ this.props.categories[this.props.data.category-1]}
            avatar= {this.profilepicture.bind(this).call()}
          />
          <CardText>
            <strong style={{clear: "none", float: "right"}}>
              ${Number(this.props.data.price).toFixed(2)}
            </strong>
            <div>
                {'Rating: '}
                <span style = {starsStyle} >{this.displayFilledStars.bind(this).call()}</span>
                <span style = {emptyStarStyle} >{this.displayEmptyStars.bind(this).call()}</span>
            <div style={iconStyle}>
              {this.props.data.spicy ? "🔥" : ""}
              {this.props.data.veggie ? "🌽" : ""}
              {this.props.data.gluten_free ? "🚫🍞" : ""}
            </div>
          </div>
          <div style={timeStamp}>
            {moment(this.props.data.timestamp).calendar()}
          </div>
          </CardText>

          <CardTitle style={titleSize}
            title={this.props.data.dish_name}
            subtitle={this.props.data.rest_name}
          />
          <CardMedia style={cardMediaStyle}>
              <img style={imageStyle} src={this.props.data.picture_path} />
          </CardMedia>
            <FlatButton onClick={this.handleDeleteCard.bind(this)}
                        label="Remove Dish"
                        style = {this.displayDeleteButton.bind(this).call()}
                        linkButton={true}
                        hoverColor= "#E9573F"
                        rippleColor="yellow"
            />
        </Card>
      </div>
    );
  }
}
