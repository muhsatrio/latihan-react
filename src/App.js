import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Satrio', age: 23},
      {name: 'Wicaksono', age: 25},
      {name: 'Hehe', age: 21}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobi saya berenang</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
