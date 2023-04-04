import './App.css'
import { Nav_Bar } from './components/Nav_Bar'
import { Shopping_Cart } from './components/Shopping_Cart'  
import { Item_List_Container } from './components/ItemListContainer'


function App() {

  let props = 'Shopping_Cart'

  return (
    <div> 
      <Nav_Bar />
      <Item_List_Container encabezado={'Ultimos lanzamientos'}/>
      
    </div>
  )
}

export default App
