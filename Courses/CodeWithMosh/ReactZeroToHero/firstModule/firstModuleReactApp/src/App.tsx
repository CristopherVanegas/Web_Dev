import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";


function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  } // creates a handle event function that receives a string parameter and then it console.log that item

  return (
    <div>
      <Alert>
        Children prop
        <span><ListGroup list={cities} heading="Cities" onSelectItem={handleSelectedItem}/></span>
      </Alert>
    </div>
  );
}

export default App;
