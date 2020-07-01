import React, { Component, useState, useEffect } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandlers from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = props => {
    const [orderList, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/orders.json')
            .then(res => {
                let fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders = [...fetchOrders, res.data[key]];
                }
                setLoading(false);
                setOrders(fetchOrders);
                // this.setState({
                //     loading: false,
                //     orders: fetchOrders
                // });
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    let content = <p>Loadng...</p>;

    if (loading===false) {
        content = (
            <div>
                {orderList.map((order, i) => (
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

    return content;
}

export default withErrorHandlers(Orders, axios);
