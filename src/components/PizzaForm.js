import React from "react";

function PizzaForm({editPizza, updatePizza, setEditPizza}) {
  const {topping, size, vegetarian} = editPizza


  function handleChange(e){


    setEditPizza({
      ...editPizza,
      [e.target.name] : e.target.value
    })
  }

  function formSubmitted(event) {
    event.preventDefault()
    
    
    fetch(`http://localhost:3001/pizzas/${editPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPizza),
    })
      .then((r) => r.json())
      .then(updatePizza);
      
  }


  


  return (
    <form onSubmit={formSubmitted}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            onChange={handleChange} 
            value ={topping}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="vegeterian"
              onChange={handleChange} 
              checked={vegetarian ? true : false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="not-vegetarian"
              onChange={handleChange} 
              checked={vegetarian ? false : true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
