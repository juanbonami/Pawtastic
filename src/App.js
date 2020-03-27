import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <form>
        <label>
          Name
          <input type="text" />
        </label>

        <label>
          Breed
          <input type="text" />
        </label>

        <label>
          Birthday
          <input type="text" />
        </label>
      </form>
    )
  }
}


