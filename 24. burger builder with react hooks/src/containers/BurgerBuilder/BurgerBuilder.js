import React, { Component, useState, useEffect } from 'react';

import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import axios from '../../axios-orders';

const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, [])

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }
    const purchaseHandler = () => {
        // this.setState({purchasing: true});
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        // this.setState({purchasing: false});
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push({
            pathname: '/checkout',
        });
    }
   
    const disabledInfo = {
        // ...this.state.ingredients
        ...props.ings
    };
    for ( let key in disabledInfo ) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;
    let burger = props.error ? <p>Data can't be loaded</p> : <Spinner />
    
    if (props.ings) {
        burger = (
        <Aux>
            <Burger ingredients={props.ings} />
            <BuildControls
                ingredientAdded={props.onIngredientAdded}
                ingredientRemoved={props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={updatePurchaseState(props.ings)}
                ordered={purchaseHandler}
                price={props.totalPrice} />
        </Aux>);
        orderSummary = <OrderSummary 
        ingredients={props.ings}
        price={props.totalPrice}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler} />;
    }
    // {salad: true, meat: false, ...}
    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actionTypes.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionTypes.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionTypes.initIngredients()),
        onInitPurchase: () => dispatch(actionTypes.purchaseInit())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));