import './App.css'
import { Nav_Bar } from './components/NavBar/Nav_Bar'
import { Item_List_Container } from './components/ItemListContainer/Item_List_Container'
import { Item_Detail_Container } from './components/ItemDetailContainer/Item_Detail_Conatiner'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './Contexts/CartContext'
import { FormProvider } from './Contexts/FormContext'
import { Cart } from './components/Cart/cart'
import { Login } from './components/Login/Login'
function App() {

  return (
    <CartProvider>
    <FormProvider>
      <div className='bg-white flex flex-col justify-center'> 
          <BrowserRouter>
            <Nav_Bar/>
            <Routes>
              <Route path='/home' element={<Item_List_Container/>}/> 
              <Route path='/products/category/:category' element={<Item_List_Container/>}/>
              <Route path='/products/detail/:pId' element={<Item_Detail_Container/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='*' element={ <Navigate to='/home'/>}/>
            </Routes>
          </BrowserRouter>
      </div> 
    </FormProvider>
    </CartProvider>
  )
}

export default App
