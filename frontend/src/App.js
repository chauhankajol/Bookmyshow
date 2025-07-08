import React from 'react'
import Home from './pages/Home'
import BsState from './context/Bsstate'

const App = () => {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>
    </div>
  )
}

export default App