import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const restaurants = this.props.restaurants.map((restaurant, index) => {
      return <Restaurant key={index}
        restaurant={restaurant}
        reviews={this.props.reviews}
        deleteRestaurant={this.props.deleteRestaurant}
        addReview={this.props.addReview}
        deleteReview={this.props.deleteReview}
        />
    });

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
