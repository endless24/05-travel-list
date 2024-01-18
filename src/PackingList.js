import { useState } from "react";
import { Items } from "./Items";

export function PackingList({
  items,
  onDeleteItem,
  oncheckedItem,
  onAddClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  //sorting the items
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemData) => (
          <Items
            itemData={itemData}
            onDeleteItem={onDeleteItem}
            oncheckedItem={oncheckedItem}
            key={itemData.id}
          />
        ))}
      </ul>
      {/* sorting list*/}
      <div className="actoin">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onAddClearList}>Clear List</button>
      </div>
    </div>
  );
}
