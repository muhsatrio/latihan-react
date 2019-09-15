import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
      };
    let classes = [];

    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hi I'm React App</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={props.clicked}>Click</button>
        </div>
    );
}

export default cockpit;