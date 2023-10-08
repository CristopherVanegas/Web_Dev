import ListGroup from "./components/ListGroup";

function App() {
  const list = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const animals = ["dog", "cat", "elephant", "lion", "tiger", "giraffe", "zebra", "penguin", "turtle", "dolphin"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  } // creates a handle event function that receives a string parameter and then it console.log that item
  return (
    <div>
      <ListGroup list={list} heading="Cities" onSelectItem={handleSelectedItem} />
      <ListGroup list={animals} heading="Animals" onSelectItem={handleSelectedItem}/>
    </div>
  );
}

export default App;
