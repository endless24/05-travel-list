export function Items({ itemData, onDeleteItem, oncheckedItem }) {
  return (
    <li>
      <span style={itemData.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={itemData.packed}
          onChange={() => oncheckedItem(itemData.id)}
        />
        {itemData.quantity} {itemData.description}
      </span>
      <button title="Delete" onClick={() => onDeleteItem(itemData.id)}>
        ❌
      </button>
      <button title="Edit">📝</button>
    </li>
  );
}
