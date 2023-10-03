import { useState } from 'react'
import './App.css'
import {Routes, Route, Link, useParams} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/NewPlayerForm' >New Player</Link>
      </nav>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />{/*Homepage */}
        <Route path='/NewPlayerForm' element={<NewPlayerForm/>} />{/*Form for new players */}
        <Route path='/SinglePlayer/:name' element={<SinglePlayer/>} />{/*Parameterized route for individual players */}
      </Routes>
    </>
  )
}

export default App
