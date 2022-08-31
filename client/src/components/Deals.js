import { useState } from 'react';
import Bonus from '../images/Bonus-card.png';
import Lock from '../images/Price-lock.png';
import Summer from '../images/Summer-deals.png';
import Cans from '../images/Multi-cans.png';
import Fruit from '../images/Fresh-fruit.png';
import House from '../images/Household.png';
import UpArrow from '../images/less-arrow.png';
import DownArrow from '../images/more-arrow.png';

export default function Deals() {
    const [showMore, setShowMore] = useState(true);



  return (
    <div className='spacing container'>
        <h1 className="h1-title" role="group" aria-label="Browse Deals">Browse Deals</h1>
        <div className="deals-container">
                <ul className="deals-images">
                    <li><a href="xxx"><img src={Bonus} alt="Bonus Card discounts and cashback offers" /></a></li>
                    <li><a href="xxx"><img src={Lock} alt="1 pound price lock items" /></a></li>
                    <li><a href="xxx"><img src={Summer} alt="summer deals category" /></a></li>
                </ul>

                {showMore && (
            <div>
                <ul className="deals-images">
                    <li><a href="xxx"><img src={Cans} alt="4 for 30 pounds multipack cans" /></a></li>
                    <li><a href="xxx"><img src={Fruit} alt="3 for 5 pounds fruit deals" /></a></li>
                    <li><a href="xxx"><img src={House} alt="halfprice household offers" /></a></li>
                </ul>
            </div>
        )}
        <div className="view-less-deals">
            <button className="view-less-button" onClick={() => setShowMore(!showMore)}>{showMore ? <p>View less deals <img src={UpArrow} className="view-less-arrow" alt="view less deals" /></p> : <p>View more deals <img src={DownArrow} className="view-less-arrow" alt="view less deals" /></p>}</button>
        </div>
        </div>

    </div>
  )
}
