import "./cerimony-style.css";
import MapSection from '../map/Map'


const Cerimony = () => {

  const location = {
		address: 'Parrocchia dei Santi Faustino e Giovita, Via Pietro Giardini, 231, 41124 Modena.',
		lat: 44.640488033871996,
		lng: 10.911685115083026,
	  } // our location object from earlier

  return (
    <section 
        className="cerimony-section"
    >
      <center>
        <div className="cerimony-title">
            <h1>
            Dimmi dove e quando
          </h1>
        </div>
      </center>
      <div className="case">
        <p >
          Alle 15:30, nella parrocchia dei <b><a href="https://www.parrocchiasanfaustino.it/" target="_blank" rel="noopener noreferrer">SS Faustino e Giovita</a></b> a Modena
        </p>
      </div>
      <div className="address">
          Via Giardini 231, 41124, Modena (MO) <br/>
          No, non è un hangar, è una chiesa :D
      </div>
      <div className='op-class-cerimony'>
        <MapSection
        id="myMap"
        options={{
          center: { lat: location.lat, lng: location.lng },
          zoom: 19,
          heading: 140,
          mapTypeId: 'satellite', // Set map type to 'satellite'
          tilt: 45, // Set tilt
        }}
        onMapLoad={map => {
          // eslint-disable-next-line
          var marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.address
          });
        }}
      />
      </div>
      
    </section>
  );
};

export default Cerimony;
