import '../App.css';
import Logo from '../images/Iceland_logo.png';
import Cart from '../images/shopping-cart.png';
import Nav from '../components/Nav';

export default function Header() {
  return (
    <div className="container">
        <a href="xxxx"><img className="logo" src={Logo} alt="Iceland the Food Warehouse logo" /></a>

        <ul className="help-menu">
            <a href="xxxx"><li className="help-item">Delivery</li></a>
            <a href="xxxx"><li className="help-item">Store Finder</li></a>
            <a href="xxxx"><li className="help-item">Help</li></a>
            <a href="xxxx"><li className="help-item">Register</li></a>
            <a href="xxxx"><li className="help-item"><button type="button" className="sign-in btn btn-success">Sign in</button></li></a>
            <a href="xxxx"><li className="help-item"><img className="cart-icon" src={Cart} alt="Shopping cart icon" /></li></a>
        </ul>

        <Nav />

        {/* <ul className="main-menu">
            <li className="main-item">Groceries</li>
            <li className="main-item">Drinks</li>
            <li className="main-item">Household</li>
            <li className="main-item">Health & Beauty</li>
            <li className="main-item">Exclusive Brands</li>
            <li className="main-item">Deals</li>

            <li className="main-item"><button type="button" className="sign-in btn btn-success">Sign in</button></li>
            <li className="main-item"><img className="cart-icon" src={Cart} alt="Shopping cart icon" /></li>
        </ul> */}
    </div>
  )
}
