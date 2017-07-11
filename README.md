# Yelpish Lab

## Objectives

Implement a Yelp-like application with restaurants and reviews.

## Overview

This exercise is based off a Redux lab some of you may have completed. Instead of passing down props, this lab was structured passing down a store and dispatching actions. To understand why we use Redux and what it abstracts away, you and your partner will rewrite this as React.

The code in the Redux branch is Redux solution to the lab. We want you to refactor this into into a working React app which doesn't use a store, reducers or dispatched actions.


## Instructions

1. First discuss the components and how they are related with your partner. What components hold state and what components need access to that state as props? User the reducers as a guide to tell you how state is structured. Use dispatched actions to tell you what components need access to state as props.

2. For the delete function to work, you will need to give each restaurant an id at the time you create it. To make this simple, it may be worth integrating another library into the components where you create the Review and Restaurant objects. You can set an id to the return value of this function.

  ```javascript
  import cuid from 'cuid';

  console.log(cuid());
  // ch72gsb320000udocl363eofy
  ```
