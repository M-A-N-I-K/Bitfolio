import './App.css'
import Home from './Components/Pages/Home'
import Coin from './Components/Pages/Coin'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' Component={Home} exact />
          <Route path='/coin/:id' Component={Coin} exact />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
