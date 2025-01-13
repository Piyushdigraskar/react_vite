import { useState } from 'react'
import MyComponent from './components/myComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyComponent />
      <div>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
