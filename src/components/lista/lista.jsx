import './lista-style.css';
import React, { Component } from "react";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ES from '../../assets/carbocrema.jpg';
import cotta from '../../assets/cotta.jpg';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyload: true,

    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

const Lista = () => {

const items = [
  <div className='sliderdiv'>
  <img src={cotta} className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_11_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_12_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_13_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_14_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_17_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_18_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_19_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_1_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_20_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_21_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_22_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_23_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_24_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_25_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_26_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
  <img src="photos/photo_31_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
</div>,
  <div className='sliderdiv'>
      <img src="photos/photo_27_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_28_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_29_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_2_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_30_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_32_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_33_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_35_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_36_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_37_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_38_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_39_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_40_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_41_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_42_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_6_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_8_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>,
  <div className='sliderdiv'>
      <img src="photos/photo_9_2023-11-11_20-39-00.jpg" className="item" loading='lazy' alt=""/>
  </div>
];

	return (
		<section 
        data-scroll-section 
        className="lista-section"
    >
      <div className="lista-title">
	  <center>
		<h1 
        data-scroll
		>
          Carbonara con la panna
        </h1>
	   </center>
      </div>
      <div className="case">
        <p>Da anni ormai siamo impegnati nella lotta contro la violenza sulla buona cucina. <br/>
		   Se vuoi supportarci in questa iniziativa, abbiamo un amico che vende padelle: 
        </p>
      </div>
      <div className="address">
	  <a href="https://elettrodomesticaservice.it">ELETTRODOMESTICA 1998 Snc</a> <br/>
	  Viale Raimondo Montecuccoli, 12/14, 41124 Modena MO, Italy
      </div>
	  <div className="container-lista"
      data-scroll>
          <img src={ES} alt=""/>
          <div 
          className="curtain-lista" 
          data-scroll
          data-scroll-repeat="true"
          data-scroll-class="left-curtain-lista"></div>
          <div 
          className="curtain-lista" 
          data-scroll
          data-scroll-repeat="true"
          data-scroll-class="right-curtain-lista"></div>   
      </div>
	  <div className="case">
        <h2 style={{ marginTop: "3em", marginLeft: "0.2em", marginRight: "0.2em" }}>Quando non cuciniamo, ci piace viaggiare.		   
        </h2>
		<p>Prendici a calci fino in Perù.</p>
		<h3 >Questa sezione è ancora in costruzione, ci siamo quasi :D		   
        </h3>
      </div>
	  <div
    className='sliderimg'
    data-scroll
    >
      <SimpleSlider>
        {items}
      </SimpleSlider>
    </div>


    </section>
	);
};

export default Lista;


