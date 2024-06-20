import ListGroup from "./Components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Guayaquil", "Medellin", "Toronto", "Tokyo"];
  const handleSelectItem = (item: string) => { console.log(item) };

  return (
    <div>
      <ListGroup items={items} heading="List of Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
