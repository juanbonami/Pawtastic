import React, { Component } from 'react';
import ComponentFirst from './components/ComponentFirst';
import ComponentSecond from './components/ComponentSecond';
import ComponentThird from './components/ComponentThird';
import ComponentFourth from './components/ComponentFourth';
import './App.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props)


  // }

  render() {
    return (
      <form className="App">
        <section className="leftside">
          <ComponentFourth />
        </section>
        
        <section className="rightside">
          <ComponentFirst />
        <ComponentSecond />
        <ComponentThird />
        </section>
        
        

      </form>
    )
  }
}


