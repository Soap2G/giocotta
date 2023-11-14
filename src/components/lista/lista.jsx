import './lista-style.css';
import React, { Component } from "react";
import imageArray from './grabber';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// import { Icon } from '@iconify/react';


import ES from '../../assets/carbocrema.jpg';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='arrow'
      style={{ 
        ...style, 
        transform: 'translateY(-20em) translateX(41.5vw)',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='arrow'
      style={{ 
        ...style, 
        transform: 'scaleX(-1) translateY(17.5em) translateX(7em)'
      }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      lazyload: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const shuffleditems = shuffleArray(imageArray());

	return (
		<section 
        className="lista-section"
    >
      <div className="lista-title">
	  <center>
		<h1 
		>
          Carbonara con la panna
        </h1>
	   </center>
      </div>
      <div className="case">
        <p>Da anni ormai siamo impegnati nella lotta contro la violenza sulla buona cucina. <br/>
		   Se volete supportarci in questa iniziativa, abbiamo un amico che vende padelle: 
        </p>
      </div>
      <div className="address">
	  <b><a href="https://elettrodomesticaservice.it" target="_blank" rel="noopener noreferrer">ELETTRODOMESTICA 1998 Snc</a></b> <br/>
	  Viale Raimondo Montecuccoli, 12/14, 41124 Modena MO, Italy
      </div>
      <ScrollAnimation animateIn='fadeIn'>
    <div className="container-lista">
          <img src={ES} alt=""/>
      </div>
      </ScrollAnimation>
	  <div className="case">
        <h2 style={{ marginTop: "3em", marginLeft: "0.2em", marginRight: "0.2em" }}>Quando non cuciniamo, ci piace viaggiare.		   
        </h2>
		{/* <p>Prendeteci a calci fino in Perù. <br/><br/> */}
		<p>Prendeteci a calci in giro per il mondo. <br/><br/>
      Se quelli fisici non fossero abbastanza soddisfacenti, <br/> accettiamo volentieri anche calci virtuali:
    </p>
		<h3 >Giovanni Guerrieri <br/> IBAN: IT60P36772223000EM001101723	   
    </h3>
    <p className='text-for-gallery'>
      Scorri con il dito per vedere le immagini
    </p>
      </div>
	  <div
    className='sliderimg'
    >
      <SimpleSlider>
        {shuffleditems}
      </SimpleSlider>
    </div>
    <div className="case" style= {{ marginTop: "5em" }} >
        <p>Siamo profondamente grati a tutti. <br/>
        Per quello che ci insegnate, ma soprattutto perchè ci siete. <br/>
        E non solo quando si festeggia :)
        </p>
        <div className="case" style= {{ marginTop: "4em" }} >
        <i>To see the world, <br/>things dangerous to come to, <br/>to see behind walls, <br/>draw closer, to find each other, <br/>and to <span style= {{ color: "#e63f34" }} >feel</span>. <br/>That is the purpose of life.</i>
      </div>
      </div>
    </section>
	);
};

export default Lista;



