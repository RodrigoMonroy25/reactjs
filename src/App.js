import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/> {/* Se inserta componente Navbar */}
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting='Zapatillas'/> {/* Se inserta componente ItemListContainer */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;