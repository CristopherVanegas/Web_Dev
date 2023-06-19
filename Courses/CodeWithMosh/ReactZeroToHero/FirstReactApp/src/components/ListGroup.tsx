
let list = [
  "New York",
  "Argentina",
  "Ecuador",
  "Mexico",
  "Canada"
]
// list = []


function ListGroup() {
  return (
    <>
    <ul className="list-group col-3 mb-2">
      <li className="list-group-item active" aria-current="true">
        Cities
      </li>
      
      {list.length === 0 && <li className="list-group-item">No items found</li>}
      {list.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
    </ul>
    </>
  );
}


export default ListGroup;
