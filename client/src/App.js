import './App.css';
import Header from './components/Header';
import CarouselOffers from './components/CarouselOffers';
import Delivery from './components/Delivery';
import Deals from './components/Deals';
import PopularCategories from './components/PopularCategories';
import Footer from './components/Footer';

function App() {

  const goToCategories = () => {
    document.getElementById('nav').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const goToMain = () => {
    document.getElementById('nav').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const goToFooter = () => {
    document.getElementById('footer').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="App">
      <button onClick={() => goToCategories()} type="button" className="bypass-btn">Skip to Navigation</button>
      <button onClick={() => goToMain()} type="button" className="bypass-btn">Skip to Main Content</button>
      <button onClick={() => goToFooter()} type="button" className="bypass-btn">Skip to Footer</button>


      <div id="nav"><Header /></div>
      <div id="main"><CarouselOffers /></div>
      <Deals />
      <PopularCategories />
      <Delivery />
      <div id="footer"><Footer /></div>
      </div>
  );
}

export default App;
