import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'

class Checkout extends Component {
    componentDidMount() {

    }
    // state = {
    //     ingredients: {
    //         salad: 0,
    //         meat: 0,
    //         cheese: 0, 
    //         bacon: 0
    //     },
    //     totalPrice: 0
    // }

    // componentDidMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = null;
    //     for (let param of query.entries()) {
    //         if (param[0]!=='price') {
    //             ingredients[param[0]] = parseInt(param[1]);
    //         }
    //         else {
    //             price = param[1];
    //         }
    //     }
    //     this.setState({
    //         ingredients: ingredients,
    //         totalPrice: price
    //     });

    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        checkoutCancelled={this.checkoutCancelledHandler} 
                        checkoutContinued={this.checkoutContinuedHandler} 
                        ingredients={this.props.ings} 
                    />
                    <Route component={ContactData} path={`${this.props.match.path}/contact-data`} {...this.props} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onInit: () => dispatch(actionTypes.purchaseInit())
//     }
// }

export default connect(mapStateToProps)(Checkout);
