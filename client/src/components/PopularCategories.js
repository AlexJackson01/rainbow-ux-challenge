import Frozen from '../images/Frozen.png';
import Essentials from '../images/Essentials.png';
import Food from '../images/Food.png';
import Drinks from '../images/Drinks.png';
import Offers from '../images/Offers.png';
import School from '../images/School-cat.png';

export default function PopularCategories() {
  return (
    <div className='container category-spacing'>
        <h1 className="h1-title">Popular Categories</h1>
        <div className="category-container">
                <ul className="category-images">
                    <li><a href="xxx"><img src={Frozen} alt="Frozen foods button" /></a></li>
                    <li><a href="xxx"><img src={Essentials} alt="Everyday essentials category" /></a></li>
                    <li><a href="xxx"><img src={Food} alt="Food Cupboard items button" /></a></li>
                    <li><a href="xxx"><img src={Drinks} alt="Drinks category" /></a></li>
                    <li><a href="xxx"><img src={Offers} alt="Offers category" /></a></li>
                    <li><a href="xxx"><img src={School} alt="back to school category" /></a></li>
                </ul>
        </div>
    </div>
  )
}
