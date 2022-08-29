import Search from '../images/search-icon.png';
import '../App.css';

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Groceries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Drinks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Household</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Health & Beauty</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Exclusive Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Deals</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="search-box form-control me-2" type="search" placeholder="Frozen foods" aria-label="Search" />
        <a href="xxx"><button className="search-btn" type="submit"><img className="search-icon" src={Search} alt="search-icon" /></button></a>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
