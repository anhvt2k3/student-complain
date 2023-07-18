import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import Card from './components/Card';

function App() {
  let cards = data.map((dat,index) => (
    dat.Reports && <Card
      key={index}
      id={index}
      Institution={dat.Institution}
      Reports={dat.Reports}
      Age={dat.Age}
      Gpa={dat.Gpa}
      Year={dat.Year}
      Count={dat.Count}
      Gender={dat.Gender}
  /> 
  ))
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;