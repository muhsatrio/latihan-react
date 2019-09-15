import React, {Component} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Satrio', age: 23},
      {id: 2, name: 'Wicaksono', age: 25},
      {id: 3, name: 'Hehe', age: 21}
    ],
    showPersons: false
  }

  gantiNamaHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});    
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.gantiNamaHandler}
          />
      );
    }

    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}
export default App;