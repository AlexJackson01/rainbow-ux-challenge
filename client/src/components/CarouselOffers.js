import Greggs from '../images/Greggs.png';
import Slimming from '../images/Slimming.png';
import School from '../images/School.png';
// import Play from '../images/play.png';
import Pause from '../images/pause-button.png';
import $ from 'jquery';



export default function CarouselOffers() {


  return (
    <div>
{/* <div className="carousel-controls"> */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-controls">
  <div className="carousel-indicators">
    <div className="carousel-arrows">
  {/* <button id="play-button" type="button" class="btn btn-default btn-xs">
  <Play className="control-button-icon" size={17} /> 
 </button>     */}
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <h3 className="line">|</h3>
    <a href="xxx"><img src={Pause} className="pause" alt="pause button" /></a>
    </div>
    <div className="carousel-arrows">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <button className="carousel-control-prev-icon" aria-label="previous image" aria-hidden="true"></button>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <button className="carousel-control-next-icon" aria-label="next image" aria-hidden="true"></button>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>
  {/* </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Greggs} className="d-block w-100" alt="Greggs steak bake with any 3 for £5 deal" />
      <div class="carousel-caption">
        <h2>Greggs Offers</h2>
        <p>Stock up your freezer with your Greggs favourites.</p>
        <p>​Iceland’s exclusive range of Greggs pasties, bakes, pies and sausage rolls allows you to transform your kitchen into your own personal bakery.</p>
        <button type="button" class="carousel-btn btn btn-light">Shop Greggs</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={Slimming} className="d-block w-100" alt="Slimming World potato wedges with any 3 for £6 deal" />
      <div className="carousel-caption">
        <h2>Slimming World</h2>
        <p>We’ve teamed up with Slimming World to create a huge selection of healthy foods so you can enjoy without the guilt. From quarter pounders to cod-cakes - our selection can be enjoyed with our Slimming World chips.</p>
        <p>​Try Iceland’s exclusive range of low-calorie dishes to help keep you on track.</p>
        <button type="button" class="carousel-btn btn btn-light">Shop Slimming World</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={School} className="d-block w-100" alt="Woman and child making lunch with any 2 for £2.50 deal" />
      <div class="carousel-caption">
        <h2>Back to School Essentials</h2>
        <p>We’ve got all your school shop essentials to kickstart your star pupil’s day.</p>
        <p>Breakfast, lunch and dinner is covered with our deals on cereals, porridge packs, bitesize snacks and teatime essentials. Check out our offers today!</p>
        <button type="button" class="carousel-btn btn btn-light">Shop School Essentials</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
