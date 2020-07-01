import * as actionTypes from './actionTypes';

// Store Result Asynchronously

// export const saveResult = (result) => {
//     return {
//         type: STORE_RESULT,
//         result: result
//     }
// }

// export const storeResult = (result) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult(result));
//         }, 2000);
//     }
// }

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            console.log(oldState);
            dispatch({
                type: actionTypes.STORE_RESULT,
                result: result
            });
        }, 2000);
    }
}

// Store Result Synchronously

// export const storeResult = (result) => {
//     return {
//         type: STORE_RESULT,
//         result: result
//     }
// }

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
}