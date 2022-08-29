import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';
import Instagram from '../images/instagram.png';
import Apps from '../images/app-store.png';

export default function Footer() {
  return (
    <div className="container">
        <hr />
        <div className="footer">
            <div className="footer-items">
        <h6>About Iceland</h6>
        <ul className="footer-list">
            <li><a href="xxx">Our Company</a></li>
            <li><a href="xxx">Our Sustainability Strategy</a></li>
            <li><a href="xxx">Our Charitable Foundation</a></li>
            <li><a href="xxx">Iceland International</a></li>
            <li><a href="xxx">Iceland at The Range</a></li>
            <li><a href="xxx">Taste Approved Products</a></li>
            <li><a href="xxx">The Food Warehouse</a></li>
        </ul>
        </div>

        <div className="footer-items">
        <h6>Useful Links</h6>
        <ul className="footer-list">
            <li><a href="xxx">Store Finder</a></li>
            <li><a href="xxx">My Account</a></li>
            <li><a href="xxx">Bonus Card</a></li>
            <li><a href="xxx">Free Delivery</a></li>
            <li><a href="xxx">Exclusive Brands</a></li>
            <li><a href="xxx">Careers</a></li>
            <li><a href="xxx">Iceland Rewards</a></li>
            <li><a href="xxx">Iceland Bingo</a></li>
            <li><a href="xxx">Gift Cards</a></li>
            <li><a href="xxx">Become A Supplier</a></li>
        </ul>
        </div>

        <div className="footer-items">
        <h6>Help and Support</h6>
        <ul className="footer-list">
            <li><a href="xxx">Contact Us / FAQs</a></li>
            <li><a href="xxx">Refer A Friend</a></li>
            <li><a href="xxx">Product Notices</a></li>
            <li><a href="xxx">Students</a></li>
            <li><a href="xxx">Emergency Services</a></li>
        </ul>
        </div>

        <div className="social-section">
        <h6 className="socials-title">Stay Updated</h6>< br/>
        <ul className="socials-menu">
        <li><img src={Facebook} className="social-icons" alt="Facebook logo" /></li>
        <li><img src={Twitter} className="social-icons" alt="Twitter logo" /></li>
        <li><img src={Youtube} className="social-icons" alt="Youtube logo" /></li>
        <li><img src={Instagram} className="social-icons" alt="Instagram logo" /></li>
        </ul>
        </div>

        <div className="footer-items">
        <h6 className="socials-title">Iceland Bonus Card</h6>
        <ul className="bonus-list"><br />
            <img src={Apps} className="apps-image" alt="Apple and Google pay buttons" />
        </ul>
        </div>
        </div>
    </div>
  )
}
