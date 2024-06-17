import Message from './Message/Message';

function App() {
  const name = ""
  if (name) return <h1>Hello {name}</h1>
  else return <div><Message/> </div>
}

export default App;