import Greggs from '../images/greggs.png';
import Slimming from '../images/slimming.png';
import School from '../images/school.png';

export default function CarouselOffers() {
  return (
    <div>
      
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
  <div className="carousel-buttons">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item">
        <div className="d-flex">
        <div className="carousel-card">
            <div className="carousel-content">
                <h2>Greggs Offers</h2>
                <p>Stock up your freezer with your Greggs favourites.</p>
                <p>​Iceland’s exclusive range of Greggs pasties, bakes, pies and sausage rolls allows you to transform your kitchen into your own personal bakery.</p>
                <button type="button" class="btn btn-light">Shop Greggs</button>
            </div>
        </div>
        <img src={Greggs} className="carousel-image w-50" alt="..." />
        </div>
    </div>
    <div className="carousel-item">
        <div className="d-flex">
        <div className="carousel-card-2">
            <div className="carousel-content-2">
                <h2>Slimming World</h2>
                <p>We’ve teamed up with Slimming World to create a huge selection of healthy foods so you can enjoy without the guilt. From quarter pounders to cod-cakes - our selection can be enjoyed with our Slimming World chips.</p>
                <p>​Try Iceland’s exclusive range of low-calorie dishes to help keep you on track. </p>
                <button type="button" class="btn btn-light">Shop Slimming World</button>
            </div>
        </div>
        <img src={Slimming} className="carousel-image-2 w-50" alt="..." />
        </div>
    </div>
    <div className="carousel-item">
        <div className="d-flex">
        <div className="carousel-card-3">
            <div className="carousel-content-3">
                <h2>Back to School Essentials</h2>
                <p>We’ve got all your school shop essentials to kickstart your star pupil’s day.</p>
                <p>Breakfast, lunch and dinner is covered with our deals on cereals, porridge packs, bitesize snacks and teatime essentials. Check out our offers today!</p>
                <button type="button" class="btn btn-light">Shop School Essentials</button>
            </div>
        </div>
        <img src={School} className="carousel-image-2 w-50" alt="..." />
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
