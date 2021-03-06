import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('')
  const {onLoadingIngredients} = props;
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length>0 ? `?orderBy="title"&equalTo="${enteredFilter}"` : ``;
        console.log(enteredFilter);
        fetch(`https://ingredients-5f045.firebaseio.com/ingredients.json${query}`)
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
            onLoadingIngredients(loadedIngredients);
          })
        }
      }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [enteredFilter, onLoadingIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
