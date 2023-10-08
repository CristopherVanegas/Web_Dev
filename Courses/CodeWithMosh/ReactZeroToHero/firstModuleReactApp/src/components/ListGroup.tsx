import { Fragment, useState } from "react";

// {items: [], heading: string} // this is a typescript property
interface ListGroupProps {
  list: string[];
  heading: string;
  onSelectItem: (item: string) => void; // I'll receive a void function with one string parameter
}

function ListGroup({ list, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedItem, setSelectedIndex] = useState(-1);
  // the first elemente is a variable(selectedIndex)
  // the second is an updater function

  return (
    <Fragment>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index); // onClick it uses the setSelectedIndex to update the selectedIndex
              onSelectItem(item); // onClick onSelectItem console.log the selected item
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
