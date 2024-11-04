import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <div className='h-[100vh] bg-gradient-to-r from-darkGreenStart via-darkGreenMid to-darkGreenStart'>
      <LoginPage></LoginPage>
      <Routes>
         <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  )
}

export default App
