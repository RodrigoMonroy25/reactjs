import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/> {/* Se inserta componente Navbar */}
      <Routes>
        <Route exact path="/">
          <ItemListContainer greeting='Zapatillas'/> {/* Se inserta componente ItemListContainer */}
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;