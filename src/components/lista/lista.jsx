import './lista-style.css';
import ES from '../../assets/ES.jpg';
import cotta from '../../assets/cotta.jpg';

const Lista = () => {
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
	  <div className="container-lista"
      data-scroll>
          <img src={cotta} alt="" width="500em"/>
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


    </section>
	);
};

export default Lista;


