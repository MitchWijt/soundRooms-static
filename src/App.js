import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import Rooms from './screens/Rooms'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
      </Routes>
    </div>
  )
}

export default App
