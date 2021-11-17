import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Cart from "./components/cart/cart"
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar img="https://drive.google.com/file/d/1mPncQ8Ye1AA2FHbXJVqZsI_D48QQxqC4/view?usp=sharing"/>
      <CartContextProvider>
        <Switch>
          <Route exact path="/"> <ItemListContainer/> </Route>
          <Route exact path="/category/:categoryId"> <ItemListContainer/> </Route>
          <Route exact path="/item/:itemId"> <ItemDetailContainer/> </Route>
          <Route exact path="/cart"> <Cart/> </Route>
          <Route path="*"><h1 className="fs-1 mt-3 text-dark text-center"> Error al cargar los datos </h1></Route>
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
