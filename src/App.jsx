import "./index.css"
import "./App.css"
import NavBar from "./Components/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"

function App() {

  return (
   <>
   <NavBar/>
    
  <ItemListContainer texto= "Texto debajo del NavBar"/> 
  </>
  )
}

export default App
