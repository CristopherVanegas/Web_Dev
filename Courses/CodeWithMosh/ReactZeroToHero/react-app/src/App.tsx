import Alert from "./Components/Alert/Alert";
import ListGroup from "./Components/ListGroup/ListGroup";

function App() {
  const items = ["New York", "Guayaquil", "Medellin", "Toronto", "Tokyo"];
  const handleSelectItem = (item: string) => { console.log(item) };

  return (
    <div>
      <Alert>
        <>
          <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
        </>
      </Alert>
    </div>
  );
}

export default App;
