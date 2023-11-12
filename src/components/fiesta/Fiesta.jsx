import "./fiesta-style.css";
import masserotti from '../../assets/masserotti.jpg';

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
      <center>
        <h1 
        data-scroll
        id="fiesta-head">
          Vi va di farvi 1 ora di macchina?
        </h1>
      </center>
        
      </div>
      <div className="case">
        <p>Vi aspettiamo qui:
        </p>
      </div>
      <div className="address">
      <b><a href="https://villaborgomasserotti.com" target="_blank"rel="noopener noreferrer" >BORGO MASSEROTTI</a></b> <br/>
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
