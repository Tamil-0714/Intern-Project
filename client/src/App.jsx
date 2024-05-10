

// Now you can use FontAwesomeIcon component in your application

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/admin">Login as Admin</a>
      </div>
    </>
  )
}

export default App
