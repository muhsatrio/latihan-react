import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.addHandler}>Add Person</button>
    </div>
);

export default addPerson;