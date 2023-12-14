import "./cerimony-style.css";
import MapSection from '../map/Map'
import DarkIcon from '../../assets/dark.webp';
import LightIcon from '../../assets/light.webp';

const Cerimony = () => {

  const location = {
		info: 'Parrocchia dei Santi Faustino e Giovita, Via Pietro Giardini, 231, 41124 Modena',
		lat: 44.640488033871996,
		lng: 10.911685115083026,
	  }

  let locations = [
    { lat: 44.640488033871996, lng: 10.911685115083026, icon:'', info: "Parrocchia dei Santi Faustino e Giovita, Via Pietro Giardini, 231, 41124 Modena" }, // Location 
    { lat: 44.64064358724783, lng: 10.919546561551698, icon: LightIcon, size_x: 36.4, size_y: 60, info: "Questa è la casa di Giovanni." }, // Location 
    { lat: 44.64191840162643, lng: 10.91285164518287, icon: DarkIcon, size_x: 48.6, size_y: 60, info: "Questa è la casa di Elisa." }, // Location 2
  ];

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
          Il 15 Giugno 2024 alle 15:30,<br/>
          nella parrocchia dei <a href="https://www.parrocchiasanfaustino.it/" target="_blank" rel="noopener noreferrer">SS Faustino e Giovita</a> a Modena.
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
        locations={locations}
      />
      </div>
      
    </section>
  );
};

export default Cerimony;
