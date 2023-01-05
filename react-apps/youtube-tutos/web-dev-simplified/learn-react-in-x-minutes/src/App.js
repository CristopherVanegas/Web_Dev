import React, {useState} from 'react';
import TodoList from "./TodoList" // imports component TodoList from TodoList.js


function App() {
  useState([])
  return (
    <>  {/* empty element or fragment that returns more than one component bc the "wrapper or fragment" it's just one element but keeps more inside itself */}
      <TodoList />  {/*separated component, first element in our application.*/}
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
