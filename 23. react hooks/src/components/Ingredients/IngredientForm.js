import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(props => {
  // Cara lama
  // const inputState = useState({title: '', amount: ''});

  // Cara baru
  const [inputState, setInputState] = useState({title: '', amount: ''});

  const submitHandler = event => {
    event.preventDefault();
    props.submitIngredient({
      title: inputState.title,
      amount: inputState.amount
    });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* Cara lama */}
            {/* <input 
              type="text" 
              id="title" 
              value={inputState[0].title} 
              onChange={event => {
                  const newTitle = event.target.value;
                  inputState[1]( prevInputState => ({ 
                    title: newTitle, 
                    amount: inputState[0].amount 
                  }))
                }
              } 
            /> */}

            {/* Cara baru */}
            <input 
              type="text" 
              id="title" 
              value={inputState.title} 
              onChange={event => {
                  const newTitle = event.target.value;
                  setInputState({
                    ...inputState,
                    title: newTitle
                  })
                }
              } 
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            {/* Cara lama */}
            {/* <input 
              type="number" 
              id="amount" 
              value={inputState[0].amount} 
              onChange={event => { 
                  const newAmount = event.target.value;
                  inputState[1](prevInputState => ({ 
                    amount: newAmount, 
                    title: inputState[0].title
                  }))
                }
              } 
            /> */}

            {/* Cara baru */}
            <input 
              type="number" 
              id="amount" 
              value={inputState.amount} 
              onChange={event => { 
                  const newAmount = event.target.value;
                  setInputState({
                    ...inputState,
                    amount: newAmount
                  })
                }
              } 
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator /> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
