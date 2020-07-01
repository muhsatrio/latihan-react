import * as actions from '../actions';

const initialState = {
    results: []
};

const resultReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            console.log(state);
            return {
                ...state,
                results: [...state.results, {
                    id: new Date(),
                    val: action.payload.val
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

export default resultReducer;