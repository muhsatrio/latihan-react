import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state=initialState, action) => {
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
        case actions.STORE_RESULT:
            console.log(state);
            return {
                ...state,
                results: [...state.results, {
                    id: new Date(),
                    val: state.counter
                }]
            }
        case actions.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id!==action.payload.id);
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
}

export default reducer;