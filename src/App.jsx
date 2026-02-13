import React from "react";
import "./App.css";
import CountingComponent from "./components/CountingComponent";

const App = () => {
  const inputs = [
    [true, 1],
    [false, 1],
  ];

  const groceryItems = [
    "Milk",
    "Bread",
    "Eggs",
    "Bananas",
    "Chicken",
    "Rice",
    "Butter",
    "Cheese",
  ];

  return (
    <div className="app">
      <section className="grocery-list">
        <h2>Grocery list</h2>
        <ul>
          {groceryItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
      <div className="counters">
        {inputs.map(([a, b], index) => (
          <CountingComponent
            key={index}
            upOrDown={a}
            valueBy={b}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
