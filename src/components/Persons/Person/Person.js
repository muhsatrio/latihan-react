import React, {Component} from "react";
import './Person.css';
import Aux from '../../../hoc/AuxComp';
// import React, { Component } from 'react'

class Person extends Component {
    render() {
        return (
            <Aux>
            {/* <div className="Person"> */}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            {/* </div> */}
            </Aux>
        )
    }
}

export default Person;

// class Person extends React.Component {}

// const person = (props) => {
//     return (
        // <div className="Person">
        //     <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} />
        // </div>
//     );
// };

// export default person;