import React, {Component} from "react";
import './Person.css';
import Aux from '../../../hoc/AuxComp';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
// import React, { Component } from 'react'

class Person extends Component {

    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
        // this.inputElement.focus();
    }
    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p> }
                </AuthContext.Consumer>
            {/* <div className="Person"> */}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                ref={this.inputElementRef}
                // ref={(inputEl) => {this.inputElement = inputEl}} 
                onChange={this.props.changed} 
                />
            {/* </div> */}
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default WithClass(Person, "Person");
// export default Person;
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