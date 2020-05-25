import React, { Component, Suspense } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders';

const asyncCheckout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = React.lazy(() => {
  return import('./containers/Orders/Orders');  
});

const App = () => {
  return (
    <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path="/checkout" component={asyncCheckout} />
              <Route path="/orders" component={asyncOrders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Suspense>
        </Layout>
      </div>
  )
}

// class App extends Component {
//   render () {
//     return (
      // <div>
      //   <Layout>
      //     <Switch>
      //       <Route path="/checkout" component={Checkout} />
      //       <Route path="/orders" component={Orders} />
      //       <Route path="/" exact component={BurgerBuilder} />
      //     </Switch>
      //   </Layout>
      // </div>
//     );
//   }
// }

export default App;
