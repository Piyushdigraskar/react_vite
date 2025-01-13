import { useState } from 'react'
//import MyComponent from './components/myComponent'
import MyPureComponent from './components/myPureComponent';
import './App.css'

function App() {
  const [name, setName] = useState("Piyush");

  return (
    <div>
      <button onClick={() => setName("Piyush")}>Set Name</button>
      <MyPureComponent name={name} />
    </div>
  );
}

export default App
