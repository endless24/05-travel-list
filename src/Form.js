import { useState } from "react";

//form function
export function Form({ onAddItems, onAddClearList }) {
  //Setting the value of input field
  const [description, setDescription] = useState("");
  //Setting the value of selected field
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //resetting input field
    setDescription("");
    //reseting the selected field
    setQuantity(1);
    //preventing the form not sumbit empty field
    if (!description) return;
    //items object
    const newItems = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    // console.log(newItems);
    //calling items function
    onAddItems(newItems);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/*creating array from 1 to 20*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
