import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Se inserta componente Navbar */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rodrigo Monroy</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
