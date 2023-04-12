import React, { useState, FormEvent, FocusEvent } from "react";
import './App.css';

function GroceryList(): JSX.Element {
  const [groceries, setGroceries] = useState<string[]>([]);
  const [newGrocery, setNewGrocery] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (newGrocery.trim()) {
      setGroceries([...groceries,newGrocery.trim()]);
      setNewGrocery("");
    }
  };

  const handleChange = (event: FocusEvent<HTMLInputElement>): void => {
    setNewGrocery(event.target.value);
  };
  const handleRemove = (index: number): void => {
    setGroceries(groceries.filter((grocery, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="heading">Grocery List</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-grocery" className="second-heading">Add a new grocery item:</label>
          <div className="input-group">
            <input
              type="text"
              id="new-grocery"
              className="form-control"
              value={newGrocery}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary form-control">Add Items</button>
            </div>
          </div>
        </div>
      </form>
      {groceries.length > 0 ? (
        <ul className="list-group">
          {groceries.map((grocery, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              {grocery}
              <button type="button" className="close" onClick={() => handleRemove(index)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No groceries yet.</p>
      )}
    </div>
  );
}

export default GroceryList;

