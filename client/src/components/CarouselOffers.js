import Greggs from '../images/greggs.png';
import Slimming from '../images/slimming.png';
import School from '../images/school.png';
import $ from 'jquery';


export default function CarouselOffers() {


  return (
    <div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="d-flex">
    <div className="carousel-card">
            <div className="carousel-content">
                <h2>Greggs Offers</h2>
                <p>Stock up your freezer with your Greggs favourites.</p>
                <p>​Iceland’s exclusive range of Greggs pasties, bakes, pies and sausage rolls allows you to transform your kitchen into your own personal bakery.</p>
                <button type="button" class="carousel-btn btn btn-light">Shop Greggs</button>
            </div>
        </div>
        <img src={Greggs} className="carousel-image w-50" alt="Greggs steak bake with any 3 for £5 deal" />
        </div>
    </div>
    <div className="carousel-item">
        <div className="d-flex">
        <div className="carousel-card card-2">
            <div className="carousel-content">
                <h2>Slimming World</h2>
                <p>We’ve teamed up with Slimming World to create a huge selection of healthy foods so you can enjoy without the guilt. From quarter pounders to cod-cakes - our selection can be enjoyed with our Slimming World chips.</p>
                <p>​Try Iceland’s exclusive range of low-calorie dishes to help keep you on track. </p>
                <button type="button" class="carousel-btn btn btn-light">Shop Slimming World</button>
            </div>
        </div>
        <img src={Slimming} className="carousel-image w-50" alt="Slimming world potato wedges with any 3 for £6 deal" />
        </div>
    </div>
    <div className="carousel-item">
        <div className="d-flex">
        <div className="carousel-card card-3">
            <div className="carousel-content">
                <h2>Back to School Essentials</h2>
                <p>We’ve got all your school shop essentials to kickstart your star pupil’s day.</p>
                <p>Breakfast, lunch and dinner is covered with our deals on cereals, porridge packs, bitesize snacks and teatime essentials. Check out our offers today!</p>
                <button type="button" class="carousel-btn btn btn-light">Shop School Essentials</button>
            </div>
        </div>
        <img src={School} className="carousel-image w-50" alt="Woman and child making lunch with any 2 for £2.50 deal" />
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
