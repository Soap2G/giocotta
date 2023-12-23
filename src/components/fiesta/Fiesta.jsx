import "./fiesta-style.css";
// import React, { useRef, useState, useEffect } from 'react';
import masserotti from '../../assets/masserotti.webp';
// import { Parallax } from "react-scroll-parallax";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { useTranslation } from 'react-i18next';


const Fiesta = () => {
	const { t } = useTranslation();


return (
<section 
        className="fiesta-section"
    >
      {/* <ScrollAnimation animateIn="fadeIn"> */}
      <div className="fiesta-title">
      <center>
        <h1 
        id="fiesta-head">
          {t('fiesta-title')}
        </h1>
      </center>
      </div>
      {/* </ScrollAnimation> */}
      <div className="case">
        <p> {t('fiesta-where')}
        </p>
      </div>
      <div className="address">
      <a href="https://villaborgomasserotti.com" target="_blank"rel="noopener noreferrer" >BORGO MASSEROTTI</a> <br/>
        Via Gaiato n. 142 <br/>
        41026 - Gaiato Chiesa - Pavullo nel Frignano (MO)
      </div>
      <ScrollAnimation animateIn='fadeIn'>
      <div className="container"
      style= {{ marginBottom: "10em" }}>
      <img src={masserotti} alt=""/>
      </div>
    </ScrollAnimation>
    </section>
  );
};

export default Fiesta;
