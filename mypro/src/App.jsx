import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashbourd from './dashbor/Dashbourd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Dashbourd/>
      </div>
     
     
    </>
  )
}

export default App
