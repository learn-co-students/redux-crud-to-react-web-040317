import React, { Component } from 'react';
import RestaurantInput from './components/restaurants/RestaurantInput'
import Restaurants from './components/restaurants/Restaurants'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
      reviews: []
    }
    this.addRestaurant = this.addRestaurant.bind(this)
    this.deleteRestaurant = this.deleteRestaurant.bind(this)
    this.addReview = this.addReview.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  addRestaurant(restaurant) {
    this.setState(prevState => {
      return {
        restaurants: [...prevState.restaurants, restaurant]
      }
    })
  }

  deleteRestaurant(restaurant) {
    this.setState(prevState => {
      return {
        restaurants: prevState.restaurants.filter(
          r => r.id !== restaurant.id
        )
      }
    })
  }

  addReview(review) {
    this.setState(prevState => {
      return {
        reviews: [...prevState.reviews, review]
      }
    })
  }

  deleteReview(review) {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.filter(
          r => r.id !== review.id
        )
      }
    })
  }

  render() {
    return (
      <div className="App">
        <RestaurantInput addRestaurant={this.addRestaurant} />
        <Restaurants
          restaurants={this.state.restaurants}
          reviews={this.state.reviews}
          deleteRestaurant={this.deleteRestaurant}
          addReview={this.addReview}
          deleteReview={this.deleteReview}
        />
      </div>
    );
  }
}
