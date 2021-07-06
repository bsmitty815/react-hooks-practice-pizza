import React from "react";

function Pizza({pizza, editPizzaInfoStored}) {
  const {id, topping, size, vegetarian} = pizza
  function editPizzaClicked() {
    editPizzaInfoStored(pizza)
  }


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button id={id} onClick={editPizzaClicked} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
