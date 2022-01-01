import { createContext, useState } from 'react';

const FoodContext = createContext({
  food1: '',
  food2: '',
  food3: '',
  saveFoods: (foods) => {}
});

export function FoodContextProvider(props) {
  const [foods, setFoods] = useState({});

  function saveFoodsHandler(foodsData) {
    setFoods(foodsData);
  }

  const context = {
    food1: foods.food1,
    food2: foods.food2,
    food3: foods.food3,
    saveFoods: saveFoodsHandler
  };

  return (
    <FoodContext.Provider value={context}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default FoodContext;
