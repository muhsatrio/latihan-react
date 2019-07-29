import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working</p>
        <Person name="Satrio" age="23" />
        <Person name="Wicaksono" age="25">Hobi saya berenang</Person>
        <Person name="Hehe" age="21" />
      </div>
    );
  }
}

export default App;
