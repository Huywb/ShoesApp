import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <div className='h-[100vh] bg-gradient-to-r from-darkGreenStart via-darkGreenMid to-darkGreenStart'>
      <Routes>
         <Route path='/' element={<HomePage></HomePage>}></Route>
         <Route path='/login' element={<LoginPage></LoginPage>}></Route>
         <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
         <Route path='/cart' element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
