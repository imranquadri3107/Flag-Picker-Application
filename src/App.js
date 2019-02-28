import React, { Component } from 'react';
import './App.css';
import continents from './continents.json';
import Continent from './Components/Continent';
import Country from './Components/Country';
import Flag from './Components/Flag';

const continentData = continents;
//console.log(continentData);

class App extends Component {
 state = {
   continent: undefined,
   countries: undefined,
   flag: undefined
 }




  render() {

    return (

      <div className = 'App'>
        <Continent/>
        <Country/>
        <Flag/>
        
      </div>
    );
  }
}

export default App;
