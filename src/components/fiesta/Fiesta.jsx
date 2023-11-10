import "./fiesta-style.css";
import masserotti from '../../assets/masserotti.png';

const Fiesta = () => {

  // window.onload = function() {
  //   document.getElementById("left-curtain").style.transform = "translateX(-100%)";
  //   document.getElementById("right-curtain").style.transform = "translateX(100%)";
  // }
  return (
<section 
        data-scroll-section 
        className="fiesta-section"
    >
      <div className="fiesta-title">
        <h1 
        data-scroll
        id="fiesta-head">
          Fiesta
        </h1>
      </div>
      <div className="case">
        <p>La festa si svolgerà a Villa Borgo Masserotti
        </p>
      </div>
      <div className="address">
        Via Gaiato n. 142 <br/>
        41026 - Gaiato Chiesa - Pavullo nel Frignano (MO)
      </div>
      <div className="container"
      data-scroll>
          <img src={masserotti} alt=""/>
          <div 
          className="curtain" 
          data-scroll
          data-scroll-repeat="true"
          data-scroll-class="left-curtain"></div>
          <div 
          className="curtain" 
          data-scroll
          data-scroll-repeat="true"
          data-scroll-class="right-curtain"></div>   
      </div>

    </section>
  );
};

export default Fiesta;
