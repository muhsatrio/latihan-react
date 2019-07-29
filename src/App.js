import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'halo'));
    // return (
    //   <div className="App">
    //     <h1>Hi I'm React App</h1>
    //   </div>
    // );
  }
}

export default App;
