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
  }

  gantiNamaHandler = (namaBaru) => {
    this.setState({persons: [
      {name: namaBaru, age: 23},
      {name: 'Wicak', age: 25},
      {name: 'Hehe', age: 29}
    ]});
  }
  
  ubahNamaHandler = (e) => {
    this.setState({persons: [
      {name: 'Satrio', age: 23},
      {name: e.target.value, age: 25},
      {name: 'Hehe', age: 29}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working</p>
        <button onClick={this.gantiNamaHandler.bind(this, 'Haya')}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.gantiNamaHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobi saya berenang</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.ubahNamaHandler} />
      </div>
    );
  }
}
export default App;