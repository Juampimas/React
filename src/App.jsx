import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Titulo />
      </header>
    </div>
  );
}

export default App;
