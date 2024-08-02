import { Toaster } from "sonner";
import "./App.css";
import Layout from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export function App() {



  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" expand={false} duration={4000}/>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
        </Routes>
      </CartContextProvider>

    </BrowserRouter>
  );
}
export default App;
