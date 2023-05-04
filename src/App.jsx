import './App.css'
import { Nav_Bar } from './components/NavBar/Nav_Bar'
import { Item_List_Container } from './components/ItemListContainer/Item_List_Container'
import { Products_Show } from './components/ProductsShow/Products_Show'
import { StrictMode } from 'react'
import { Item_Detail_Container } from './components/ItemDetailContainer/Item_Detail_Conatiner'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './Contexts/CartContext'
import { Cart } from './components/Cart/cart'
import { Loading } from './components/Loading.jsx/Loading'
function App() {

  return (
    <CartProvider>
      <div className='bg-white flex flex-col justify-center'> 
          <BrowserRouter>
            <Nav_Bar/>
            <Routes>
              <Route path='/home' element={<Item_List_Container/>}/> 
              <Route path='/products/category/:category' element={<Item_List_Container/>}/>
              <Route path='/products/detail/:pId' element={<Item_Detail_Container/>}/>
              <Route path='*' element={ <Navigate to='/home'/>} />
            </Routes>
          </BrowserRouter>
          {/* <Cart></Cart> */}
      </div> 
      </CartProvider>
  )
}

export default App
