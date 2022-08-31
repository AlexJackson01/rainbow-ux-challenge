import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';
import Instagram from '../images/instagram.png';
import Apps from '../images/app-store.png';
import Award from '../images/good-housekeeping.png';

export default function Footer() {
  return (
    <div className="container">
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
            <li><a href="xxx">Bonus Card - Iceland Rewards</a></li>
            <li><a href="xxx">Free Delivery</a></li>
            <li><a href="xxx">Exclusive Brands</a></li>
            <li><a href="xxx">Careers</a></li>
            <li><a href="xxx">Iceland Bingo</a></li>
            <li><a href="xxx">Gift Cards</a></li>
            <li><a href="xxx">Become A Supplier</a></li>
        </ul>
        </div>

        <div className="footer-items">
        <h6>Help and Support</h6>
        <ul className="footer-list">
            <li><a href="xxx">Sitemap</a></li>
            <li><a href="xxx">Contact Us / FAQs</a></li>
            <li><a href="xxx">Refer A Friend</a></li>
            <li><a href="xxx">Product Notices</a></li>
            <li><a href="xxx">Students</a></li>
            <li><a href="xxx">Emergency Services</a></li>
        </ul>
        </div>

        <div className="social-section">
        <h6>Stay Updated</h6>< br/>
        <ul className="socials-menu">
        <li><a href="xxx"><img src={Facebook} alt="Facebook logo" /></a></li>
        <li><a href="xxx"><img src={Twitter} alt="Twitter logo" /></a></li>
        <li><a href="xxx"><img src={Youtube} alt="Youtube logo" /></a></li>
        <li><a href="xxx"><img src={Instagram} alt="Instagram logo" /></a></li>
        </ul>
        <br />
        <div className="footer-items">
        <h6>Iceland Bonus Card App</h6>
        <ul className="bonus-list"><br />
        <a href="xxx"><img src={Apps} className="apps-image" alt="Apple and Google pay buttons" /></a>
        </ul>
        </div>


        </div>
        </div>
        <hr />

        <ul className="footer-items award-footer">
            <li><img src={Award} className="award-logo" alt="good housekeeping food award winner 2022" /></li>
            <li>Favourite Online Grocery Service<br/>Winners 2021 & 2022</li>
        </ul>

        <ul className="footer-items">
            <li>© Copyright 2022 Iceland Foods Ltd</li>
        </ul>

        <ul className="footer-items accessibility">
            <li><a href="xxx">Accessibility</a></li>
            <li><a href="xxx">Terms & Conditions</a></li>
            <li><a href="xxx">Privacy & Cookie Policy</a></li>
        </ul>
    </div>
  )
}
