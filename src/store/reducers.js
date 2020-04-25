import {ADD_PERSON, DELETE_PERSON} from '../store/actions'

const initialState = {
    persons: [],
}

const reducers = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                persons: [...state.persons, {
                    id: action.payload.id,
                    name: action.payload.name,
                    age: action.payload.age,
                }]
            };
        case DELETE_PERSON:
            const newPersons = state.persons.filter(result => result.id!==action.payload.id);

            return {
                ...state,
                persons: newPersons
            };
        
        default:
            return state;
    }
}

export default reducers;