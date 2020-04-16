import React, {useState} from 'react';

import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;

    const [valueInput, setValueInput] = useState(props);

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.change} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement}  
                {...props.elementConfig} 
                value={props.value}
                onChange={props.change}
                 />;
            break;
        case ('select'):
            inputElement = <select 
                className={classes.InputElement}
                onChange={props.change}>  
                {props.elementConfig.options.map((option, id) => (
                    <option key={id} 
                        value={option.value}>{option.displayValue}</option>
                ))}
                </select>;
            break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;