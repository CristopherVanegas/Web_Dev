import Button from "./Components/Button/Button";

function App() {
  return (
    <div>
      <Button color="success" children="Click me!" handleOnClick={() => console.log('Clicked!')}></Button>
    </div>
  );
}

export default App;
