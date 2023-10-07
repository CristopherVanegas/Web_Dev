import { MouseEvent } from "react";
import { Fragment } from "react";

const list = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleCLick = (event: MouseEvent) => console.log(event); // Event handler
let selectedItem = 0;

function ListGroup() {
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
            className='list-group-item'
            key={item}
            onClick={handleCLick}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
