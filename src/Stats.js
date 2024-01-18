export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your Packing list</em>
      </p>
    );
  } //getting the number of added item
  const numItems = items.length;
  //getting the number of checked/packed items
  const numPacked = items.filter((item) => item.packed).length;
  //getting the percentage of the packed items
  const numPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? " You got everything! Ready to go ✈️"
          : ` 🧳 You have ${numItems} items on your list and already packed ${numPacked}
        (${numPercentage}%)`}
      </em>
    </footer>
  );
}
