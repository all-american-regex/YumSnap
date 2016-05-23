import React from "react";
import DishCard from "./Card";

export default class CardFeed extends React.Component {
  matchesUserFilters(c) {
    if (this.props.category !== null && this.props.category !== c.category) return false;
    if (this.props.boolNoSpice && c.spicy) return false;
    if (this.props.boolGF && c.gluten_free === false) return false;
    if (this.props.boolVeg && c.veggie === false) return false;
    return true;
  }

  render() {
    return (
      <div>
        {this.props.cardData.map((card, index) => this.matchesUserFilters(card) ?
          <DishCard
          key = {index}
          data = {card}
          currentUser = {this.props.currentUser}
          categories = {this.props.categories}
          deleteCard = {this.props.deleteCard.bind(this)}
          /> :
          null)}
      </div>
    );
  }
}
