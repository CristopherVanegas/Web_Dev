import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["New York", "Guayaquil", "Medellin", "Toronto", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
