import './lista-style.css';
import React, { Component } from "react";
import imageArray from './grabber';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';


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

	const { t } = useTranslation();


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
            {t('thankyou')}
          </h1>
      <div className="case" style= {{ marginTop: "1em" }} >
          <p><Trans i18nKey='thankyou1'/> <br/><br/>
          </p>
          <p style= {{ marginTop: "10em" }}>
          <Trans i18nKey='IBAN'/><br/>
          </p>
        </div>
      <div className="case" style= {{ marginTop: "1em" }} >
          <p>{/* Oppure, attraverso <br/><br/> */}
          <code style={{ wordWrap: "break-word" }}>Elisa Cottafava e Giovanni Guerrieri<br/>IBAN:IT20A0301503200000003632172</code><br/><br/>
          <Trans i18nKey="donate" components={{a: <a href="https://www.viaggisolidali.it" target="_blank" rel="noopener noreferrer">placeholder</a>, Link: <Link aria-current="page" to="/blog">placeholder</Link>}} />
          </p>
        </div>
      </center>
     <center>
     <div className="lista-subtitle">
      <h2 style={{ marginLeft: "0.2em", marginRight: "0.2em", fontWeight: "400" }}>{t('cucina')} 
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
      <h2 style={{ marginTop: "1.5em", marginLeft: "0.2em", marginRight: "0.2em", fontWeight: "400" }}>{t('travel')}  
        </h2>
      </div>
      <div className="case">
      <p>{t('travel1')}</p>
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
          fontSize: '1.5rem',
          maxWidth: '100%'

          }}>
        To see the world, <br/>things dangerous to come to, <br/>to see behind walls, <br/>draw closer, to find each other, <br/>and to <span className='feel'>feel</span>. <br/>That is the purpose of life.
      </div>
    </section>
	);
};

export default Lista;



