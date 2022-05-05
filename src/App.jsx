import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
