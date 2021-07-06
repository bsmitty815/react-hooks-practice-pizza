import React from "react";
import Pizza from "./Pizza";



function PizzaList({pizzas, editPizzaInfoStored}) {

 


  const eachPizza = pizzas.map((pizza) => {
    return <Pizza key={pizza.id} pizza={pizza} editPizzaInfoStored={editPizzaInfoStored} />
  })

  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          eachPizza
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
