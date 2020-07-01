import React, { Component, useState } from 'react';

import Aux from '../AuxComponent';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

// class Layout extends Component {
//     state = {
//         showSideDrawer: false
//     }

//     sideDrawerClosedHandler = () => {
//         this.setState( { showSideDrawer: false } );
//     }

//     sideDrawerToggleHandler = () => {
//         this.setState( ( prevState ) => {
//             return { showSideDrawer: !prevState.showSideDrawer };
//         } );
//     }

//     render () {
//         return (
//             <Aux>
//                 <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
//                 <SideDrawer
//                     open={this.state.showSideDrawer}
//                     closed={this.sideDrawerClosedHandler} />
//                 <main className={classes.Content}>
//                     {this.props.children}
//                 </main>
//             </Aux>
//         )
//     }
// }

export default Layout;