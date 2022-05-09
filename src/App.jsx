import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/CartWidget/CartWidget';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
      <section className='hero'>
        <Hero />
      </section>
        <Footer />
    </div>
  );
}

export default App;
