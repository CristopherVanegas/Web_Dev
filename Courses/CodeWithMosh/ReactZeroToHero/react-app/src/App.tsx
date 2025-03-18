// import ListGroup from "./Components/ListGroup";
import { FaCalendar } from "react-icons/fa";

function App() {
  const items = ["New York", "Guayaquil", "Medellin", "Toronto", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <FaCalendar color="green" size={40} />
    </div>
  );
}

export default App;
