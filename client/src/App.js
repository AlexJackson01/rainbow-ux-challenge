import './App.css';
import Header from './components/Header';
import CarouselOffers from './components/CarouselOffers';
import Delivery from './components/Delivery';
import Deals from './components/Deals';
import PopularCategories from './components/PopularCategories';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselOffers />
      <Deals />
      <PopularCategories />
      <Delivery />
    </div>
  );
}

export default App;
