import './App.css'
import { Nav_Bar } from './components/NavBar/Nav_Bar'
import { Item_List_Container } from './components/ItemListContainer/Item_List_Container'
import { Products_Show } from './components/ProductsShow/Products_Show'
import { StrictMode } from 'react'
import { Item_Detail_Container } from './components/ItemDetailContainer/Item_Detail_Conatiner'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className='bg-white flex flex-col justify-center'> 
        <Nav_Bar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Item_List_Container/>}/> 
            <Route path='/products' element={<Products_Show/>}/>
            <Route path='/products/detail' element={<Item_Detail_Container/>}/>
            <Route path='*' element={ <Navigate to='/'/>} />
          </Routes>
        </BrowserRouter>
        
  
    </div> 
  )
}

export default App
