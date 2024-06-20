import ListGroup from "./Components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Guayaquil", "Medellin", "Toronto", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="List of Cities" />
    </div>
  );
}

export default App;
