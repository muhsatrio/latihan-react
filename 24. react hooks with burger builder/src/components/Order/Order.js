import React from 'react'
import PropTypes from 'prop-types'

import classes from './Order.css';

const order = ({ ...props }) => {
    let ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients = [...ingredients, {
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        }];
    }

    const ingredientsOutput = ingredients.map((ig, id) => {
       return (
       <span 
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
        key={id}>{ig.name}: {ig.amount}</span>
       ) 
    });
    console.log(ingredients);

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;
