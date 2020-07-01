import React, {Component, useState, useEffect} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../AuxComponent';
import Axios from 'axios';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [errorValue, setErrorValue] = useState(null);
        const requestInterceptor = axios.interceptors.request.use(req => {
            setErrorValue(null);
            return req;
        });
        const responseInterceptor = axios.interceptors.response.use(res => res, error => {
            setErrorValue(error)
        });

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(requestInterceptor);
                axios.interceptors.response.eject(responseInterceptor);
            }
        }, []);

        const errorConfirmedHandler = () => {
            setErrorValue(null);
        }
        return (
            <Aux>
                <Modal show={errorValue}
                    modalClosed={errorConfirmedHandler}>
                    {errorValue ? errorValue.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

// const withErrorHandler = (WrappedComponent, axios) => {
//     return class extends Component {
//         state = {
//             error: null
//         }
//         componentWillMount() {
//             this.requestInterceptor = axios.interceptors.request.use(req => {
//                 this.setState({error: null});
//                 return req;
//             });
//             this.requestInterceptor = axios.interceptors.response.use(res => res, error => {
//                 this.setState({error: error});
//             });
//         }

//         componentWillUnmount() {
//             axios.interceptors.request.eject(this.requestInterceptor);
//             axios.interceptors.response.eject(this.requestInterceptor);
//         }

//         errorConfirmedHandler = () => {
//             this.setState({error: null});
//         }
//         render() {
//             return (
//                 <Aux>
//                     <Modal show={this.state.error}
//                         modalClosed={this.errorConfirmedHandler}>
//                         {this.state.error ? this.state.error.message : null}
//                     </Modal>
//                     <WrappedComponent {...this.props} />
//                 </Aux>
//             );
//         }
//     } 
// }

export default withErrorHandler;