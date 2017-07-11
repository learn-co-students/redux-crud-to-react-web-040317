import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant)
  }

  render() {
    const { text, id } = this.props.restaurant;

    return (
      <div>
        <li>
          {text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewInput
            reviews={this.props.reviews}
            addReview={this.props.addReview}
            deleteReview={this.props.deleteReview}
            restaurantId={id}
          />
        </li>
      </div>
    );
  }
};

export default Restaurant;
