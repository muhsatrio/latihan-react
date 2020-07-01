import * as actions from '../actions';

const initialState = {
    counter: 0,
};

const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            console.log(state);
            return {
                ...state,
                counter: state.counter + 1
            }
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actions.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.val
            }
        case actions.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.val
            }
        default:
            return state;
    }
}

export default counterReducer;