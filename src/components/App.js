import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const DATA = "http://localhost:3001/pizzas"

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState([])

  

  useEffect(() => {
    fetch(DATA)
    .then(response => response.json())
    .then(data => setPizzas(data))

  }, [])

  function editPizzaInfoStored(e) {
    setEditPizza(e)
  }

  function updatePizza(updatedPizza) {

    //here we map through the pizzas state. if the pizza does not match the updated pizza
    //we return that pizza untouched. if it does match we return that updatedPizza
    const updatedPizzas = pizzas.map((pizza) =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    
    setPizzas(updatedPizzas)
  }





  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} setEditPizza={setEditPizza} updatePizza={updatePizza} />
      <PizzaList pizzas={pizzas} editPizzaInfoStored={editPizzaInfoStored} />
    </>
  );
}

export default App;
