import ListGroup from "./components/ListGroup";

function App() {
  const list = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const animals = ["dog", "cat", "elephant", "lion", "tiger", "giraffe", "zebra", "penguin", "turtle", "dolphin"];

  return (
    <div>
      <ListGroup list={list} heading="Cities" />
      <ListGroup list={animals} heading="Animals"/>
    </div>
  );
}

export default App;
