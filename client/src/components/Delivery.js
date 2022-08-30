import Free from '../images/free-delivery.png';

export default function Delivery() {
  return (
    <div className="container">
        <div className="free-delivery">
            <ul className="delivery-content">
                <li><img src={Free} className="free-icon" alt="Free Delivery logo" /></li>
                <li><p className="delivery-text"><h4>Free Next Day Delivery</h4>when you spend £40</p></li>
                <li><a href="xxxx"><button type="button" className="delivery-btn btn btn-success">Book a delivery</button></a></li>
            </ul>
            </div>
    </div>
  )
}
