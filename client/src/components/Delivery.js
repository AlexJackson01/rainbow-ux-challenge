import Free from '../images/free-delivery.png';

export default function Delivery() {
  return (
    <div className="free-delivery">
        <div className="delivery-content">
        <img src={Free} className="free-icon" alt="Free Delivery logo" />
        <p>Free next day delivery when you spend £40</p>
        <a href="xxxx"><button type="button" className="delivery-btn btn btn-success">Book a delivery</button></a>
        </div>
    </div>
  )
}
