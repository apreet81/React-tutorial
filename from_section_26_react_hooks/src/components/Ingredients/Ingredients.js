import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const filteredIngredientHandler=useCallback(filteredIngredients=>{
    setUserIngredients(filteredIngredients);
  },[])

  useEffect(() => {
    fetch(
      "https://react-hooks-update-9aa22-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  },[]);

  useEffect(()=>{
    console.log("RENDERING INGREDIENTS", [userIngredients])
  });

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-hooks-update-9aa22-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "content-type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        debugger;
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
