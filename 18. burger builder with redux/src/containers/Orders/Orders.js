import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandlers from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders = [...fetchOrders, res.data[key]];
                }
                this.setState({
                    loading: false,
                    orders: fetchOrders
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state.orders);
        return (
            <div>
                {this.state.orders.map((order, i) => (
                    <Order 
                        key={i} 
                        orders={order.orders}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        )
    }
}

export default withErrorHandlers(Orders, axios);
