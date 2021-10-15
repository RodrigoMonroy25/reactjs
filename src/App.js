import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/> {/* Se inserta componente Navbar */}
      <ItemListContainer greeting='Prop greeting'/> {/* Se inserta componente ItemListContainer */}
    </div>
  );
}

export default App;
