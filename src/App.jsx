import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import OrderSummary from './pages/OrderSummary'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<OrderSummary />} />
      </Routes>
    </>
  )
}

export default App
