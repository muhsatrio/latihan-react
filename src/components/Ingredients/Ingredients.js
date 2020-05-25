import React, {useState, useEffect, useCallback, useReducer} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredient, action.ingredients];
    case 'DELETE':
      return currentIngredient.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not be there");
  }
}

const httpReducer = (currHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true, error: null
      }
    case 'RESPONSE':
      return {
        ...currHttpState,
        loading: false
      }
    case 'ERROR':
      return {
        loading: false,
        error: action.error
      }
    case 'CLEAR':
      console.log('test');
      return {
        ...currHttpState,
        error: null
      }
    default:
      throw new Error("Should not be there")
  }
}

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null});
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    fetch('https://ingredients-5f045.firebaseio.com/ingredients.json')
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        let loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients = [...loadedIngredients, {
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          }];
        }
        // setIngredients(loadedIngredients);
        dispatch({
          type: 'SET', 
          ingredients: loadedIngredients
        });
      })
  }, []);
  
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setIngredients(filteredIngredients);
    dispatch({
      type: 'SET', 
      ingredients: filteredIngredients
    });
  }, []);

  const addIngredientHandler = ingredient => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch('https://ingredients-5f045.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // setIsLoading(false);
      dispatchHttp({type: 'RESPONSE'});
      return response.json();
    })
    .then(responseData => {
      // setIngredients(prevIngredients => [...prevIngredients, {
      //   id: responseData.name,
      //   ...ingredient
      // }]);
      dispatch({
        type: 'ADD',
        ingredients: {
            id: responseData.name,
        ...ingredient
        }
      })
    });
    // setIngredients(prevIngredients => [...prevIngredients, {
    //   id: Math.random(),
    //   ...ingredient
    // }]);
  }

  const removeIngredientHandler = id => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch(`https://ingredients-5f045.firebaseio.com/ingredients/${id}.json`, {
      method: 'DELETE',
    })
    .then(response => {
      // setIsLoading(false);
      dispatchHttp({type: 'RESPONSE'});
      // const updatedIngredients = ingredients.filter(eachIng => {
      //   return eachIng.id!==id
      // });
      // setIngredients(updatedIngredients);
      dispatch({
        type: 'DELETE',
        id: id
      })
    })
    .catch(err => {
      // setError(err.message);
      dispatchHttp({type: 'ERROR', error: err.message});
    });
  }

  const clearError = () => {
    // setError(null);
    dispatchHttp({type: 'CLEAR'});
  }

  return (
    <div className="App">
      {httpState.error ? <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal> : null}
      <IngredientForm submitIngredient={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadingIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
