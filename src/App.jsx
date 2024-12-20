import "./index.css"
import "./App.css"
import NavBar from "./Components/NavBar.jsx"
import ItemListContainer from "./Components/ItemListContainer.jsx"
import ItemDetailContainer from "./Components/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:id" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App