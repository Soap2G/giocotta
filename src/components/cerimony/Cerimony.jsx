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
        data-scroll-section 
        className="cerimony-section"
    >
      <div className="cerimony">
        <h1 data-scroll
        data-scroll-speed="2"
        data-scroll-offset="0%, 30%"
        >
          Dimmi dove e quando
        </h1>
      </div>
      <div className='op-class-cerimony'>
        <MapSection
        data-scroll
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
