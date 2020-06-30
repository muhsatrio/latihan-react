import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0, 
            bacon: 0
        },
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for (let param of query.entries()) {
            if (param[0]!=='price') {
                ingredients[param[0]] = parseInt(param[1]);
            }
            else {
                price = param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });

    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelledHandler} 
                    checkoutContinued={this.checkoutContinuedHandler} 
                    ingredients={this.state.ingredients} 
                />
                <Route render={() => (<ContactData price={this.state.totalPrice} ingredients={this.state.ingredients} />)} path={`${this.props.match.path}/contact-data`} {...this.props} />
            </div>
        )
    }
}

export default Checkout;
