import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Cart from "./pages/Cart/Cart";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
