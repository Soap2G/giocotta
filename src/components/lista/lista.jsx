import './lista-style.css';
import React, { Component } from "react";
import imageArray from './grabber';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

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
      speed: 700,
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
		    <h1>
          Grazie.
        </h1>
	   </center>
     <div className="case" style= {{ marginTop: "1em" }} >
        <p>Siamo profondamente grati a tutti. <br/>
        Per quello che ci insegnate, ma soprattutto perchè ci siete. <br/>
        E non solo quando si festeggia :) <br/><br/>
        </p>
        <p style= {{ marginTop: "10em" }}>
        Molto di quello che ci serve lo abbiamo già, ma se avete piacere di contribuire, <br/>
        potete utilizzare queste coordinate:<br/>
        </p>
      </div>
     <div className="case" style= {{ marginTop: "1em" }} >
        <p>{/* Oppure, attraverso <br/><br/> */}
        <code>Elisa Cottafava e Giovanni Guerrieri<br/>IBAN:XXX</code><br/><br/>
        Ci piacerebbe donare una parte di quello che ci verrà regalato alle comunità che visiteremo durante il nostro <a href="https://www.viaggisolidali.it" target="_blank"rel="noopener noreferrer" >viaggio solidale</a>. <br/>
        Il resto lo vorremmo investire in altre nostre passioni, come 
        </p>
      </div>
     <center>
     <div className="lista-subtitle">
      <h2 style={{ marginLeft: "0.2em", marginRight: "0.2em", fontWeight: "400" }}>La (buona?) cucina.   
        </h2>
      </div>
	   </center>
      </div>
      <ScrollAnimation animateIn='fadeIn'>
      <div className="container-lista">
          {/* <img src={ES} alt="" /> */}
      </div>
      </ScrollAnimation>
      <center>
        <div className="lista-subtitle">
      <h2 style={{ marginTop: "1.5em", marginLeft: "0.2em", marginRight: "0.2em", fontWeight: "400" }}>Quando non cuciniamo, ci piace viaggiare.		   
        </h2>
      </div>
      <div className="case">
      <p>Lo avevamo già menzionato?</p>
      </div>
      </center>
      
	  {/* <div className="case">
    
    <p className='text-for-gallery'>
      Scorri con il dito per vedere le immagini
    </p>
      </div> */}
	  <div
    className='sliderimg'
    >
      <SimpleSlider>
        {shuffleditems}
      </SimpleSlider>
    </div>
        <div className="case"
        style={{ 
          letterSpacing: '.15rem',
          lineHeight: '1.5', 
          marginTop: "5em", 
          marginBottom: "5em", 
          fontSize: '1.5rem'
          }}>
        To see the world, <br/>things dangerous to come to, <br/>to see behind walls, <br/>draw closer, to find each other, <br/>and to <span style= {{ color: "var(--feel-color)" }} >feel</span>. <br/>That is the purpose of life.
      </div>
    </section>
	);
};

export default Lista;



