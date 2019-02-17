import React, { Component } from 'react';
import './App.css';
import continents from './continents.json';
import Continent from './Continent';

//var data = continents;
//console.log(data[0].continent);
class App extends Component {
  
 

 getData = (data)=>{
   data.prevent.default();
  
  console.log(data);
 }


  render() {
    return (
      
      <div className = 'App'>
        <h1>Flag Picker</h1><br/>
        <h3>This App will help you to learn flags around the world in 3 Steps</h3>

        <Continent continents = {continents}/>
      </div>
    );
  }
}

export default App;
