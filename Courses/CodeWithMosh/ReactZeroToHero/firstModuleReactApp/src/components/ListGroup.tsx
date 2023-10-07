import { Fragment, useState } from "react";

function ListGroup() {
  const list = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedItem, setSelectedIndex] = useState(-1);

  if (list.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found!</p>
      </>
    );

  return (
    <Fragment>
      <h1>List Group</h1>
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
