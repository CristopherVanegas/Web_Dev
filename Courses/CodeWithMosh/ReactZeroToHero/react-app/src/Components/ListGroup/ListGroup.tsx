import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
        {/* or <> */}
    <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
    // or </>
  );
}

export default ListGroup;
