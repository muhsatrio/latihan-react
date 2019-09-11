import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Satrio', age: 23},
      {name: 'Wicaksono', age: 25},
      {name: 'Hehe', age: 21}
    ],
    showPersons: false
  }

  gantiNamaHandler = (namaBaru) => {
    this.setState({persons: [
      {name: namaBaru, age: 23},
      {name: 'Wicak', age: 25},
      {name: 'Hehe', age: 29}
    ]});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});    
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Click</button>
        {persons}
      </div>
    );
  }
}
export default App;