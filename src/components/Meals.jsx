import React, { useContext, useEffect, useState } from "react";
import Button from "./UI/Button";
import { CartContext } from "../state/CartContext";

const Meals = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    getMeals();
  }, []);
  const getMeals = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      if (!response.ok) return;
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="meals">
      {isLoading ? (
        <div className="loader">
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      ) : (
        data &&
        data.map((item) => (
          <div className="meal-item" key={item.id}>
            <article>
              <img
                src={`http://localhost:3000/${item.image}`}
                alt={item.image}
              />
              <div>
                <h3>{item.name}</h3>
                <p className="meal-item-price">{item.price}</p>
                <p className="meal-item-description">{item.description}</p>
                <Button
                  onClick={() => {
                    cartContext.addItem(item);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </article>
          </div>
        ))
      )}
    </div>
  );
};

export default Meals;
