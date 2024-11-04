import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='text-lx text-red-600'>
      
      <Routes>
         <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  )
}

export default App
