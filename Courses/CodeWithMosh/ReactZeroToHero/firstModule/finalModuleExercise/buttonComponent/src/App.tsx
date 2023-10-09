import Button from "./components/Button";
import reactIconInAnHexagon from "./images/react-icon-in-a-hexagon-vector.jpg"

const handleClick = (msg: string) => {
  console.log(msg);
} // creates a handle event function that receives a string parameter and then it console.log that item

function App() {
  return (
    <>
      <Button Label="Reusable Button" color="dark" onClick={handleClick}>
        <img
          src={reactIconInAnHexagon}
          alt="ReactJS-Icon"
          height={30}
        />
      </Button>
    </>
  );
}

export default App;
