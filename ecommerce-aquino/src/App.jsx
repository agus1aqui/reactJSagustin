import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";





export const App = () => {
  return (


    <>
      <NavBar />
      <ItemListContainer greeting={"Hola mundo"} />
    </>
  )
}

export default App;
