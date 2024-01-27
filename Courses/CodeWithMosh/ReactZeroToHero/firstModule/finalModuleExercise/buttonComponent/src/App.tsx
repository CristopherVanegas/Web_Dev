import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import reactIconInAnHexagon from "./images/react-icon-in-a-hexagon-vector.jpg"


function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert!</Alert> }
      <Button Label="Reusable Button" color="dark" onClick={() => setAlertVisibility(true)}>
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
