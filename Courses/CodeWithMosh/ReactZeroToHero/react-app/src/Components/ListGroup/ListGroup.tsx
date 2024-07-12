import { useState } from "react";
import styled from 'styled-components';

// styled-component for ul
const List = styled.ul `
  list-style: none;
  padding: 0;
`;

// styled-component for li
const ListItem = styled.li<ListItemProp> ` 
  padding: 5px 0;
  background: ${ props => props.active ? 'cyan' : 'none'};
`;

// Prop of type boolean to follow the state
interface ListItemProp {
  active: boolean;
}

// To define the shape or input for a component
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Hook
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
