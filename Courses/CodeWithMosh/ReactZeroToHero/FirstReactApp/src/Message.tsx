import ListGroup from "./components/ListGroup";

// Passcal Casing
function Message() {
  // styles
  const style = {
    color: "#000000",
    fontSize: "20px",
  };
  
  const name = "Icelym";

  // JSX: JavaScript XML
  return (
    <div className="container border border-1 mt-2 mb-4">
      <div className="navbar h-200 col-12">
        <h1 className="m-0" style={style}>
          Tourism Catalog
        </h1>
        <ul className="col-5 m-0 list-unstyled d-flex justify-content-between">
          <li className="border p-3 border-1 p-1 rounded-5">Plans</li>
          <li className="border p-3 border-1 p-1 rounded-5">Favourite</li>
          <li className="border p-3 border-1 p-1 rounded-5">Sign Out</li>
        </ul>
      </div>
      <h2 className="mb-4 display-2" style={style}>
        Hello <strong>{name}</strong>
      </h2>
      <ListGroup />
    </div>
  );
}

export default Message;
