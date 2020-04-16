import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/Spinner/Spinner';
import {withRouter} from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Satrio',
                address: {
                    street: 'Kp.Cerewed',
                    zipCode: '17111',
                    country: 'Indonesia'
                },
                email: 'muhsatrio@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            console.log(response);
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false});
        });
    }

    render() {
        console.log(this.props);
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" id=""/>
                <Input inputtype="input" type="email" name="email" placeholder="Your Email" id=""/>
                <Input inputtype="input" type="text" name="street" placeholder="Street" id=""/>
                <Input inputtype="input" type="text" name="postalCode" placeholder="Postal Code" id=""/>
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);
