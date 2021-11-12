import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" greeting="Zapatillas" > <ItemListContainer/> </Route>
        <Route exact path="/category/:categoryId"> <ItemListContainer/> </Route>
        <Route exact path="/item/:itemId"> <ItemDetailContainer/> </Route>
        <Route exact path="/cart"> <Cart/> </Route>
        <Route path="*"><h1 className="fs-1 mt-3 text-dark text-center"> Error al cargar los datos </h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
