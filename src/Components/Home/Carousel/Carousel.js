import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'


const Carousel = () => {
    return (
        <section className="mb-5 pb-5" style={{height:'400px',backgroundColor:'black'}}>
            <div id="carouselExampleControls"  class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" style={{width:'100%',height:'400px'}}>
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={carousel1} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={carousel2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={carousel3} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
          </div>
        </section>
    );
};

export default Carousel;