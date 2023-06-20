import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// )

// const Map = ({ location, zoomLevel }) => {
//     return (
//         <section
// 			className="cerimony-section"
// 		>
//             <div className="map">
//                 <h2 className="map-h2">Ore XX:XX, presso la parrocchia dei SS Faustino e Giovita a Modena</h2>

//                 <div className="google-map">
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: 'AIzaSyCDgK7pUTvN0LTxrIEaV_DbyzszruFQtH8' }}
//                     defaultCenter={location}
//                     defaultZoom={zoomLevel}
//                 >
//                     <LocationPin
//                     lat={location.lat}
//                     lng={location.lng}
//                     text={location.address}
//                     />
//                 </GoogleMapReact>
//                 </div>
//             </div>
//         </section>
//     );
// };

// class Map extends React.Component {
//   mapRef = React.createRef();

//   componentDidMount() {
//     const { location, zoomLevel } = this.props;
//     const script = window.document.getElementsByTagName('script')[0];
//     script.addEventListener('load', () => {
//       this.initMap(location, zoomLevel);
//     });
//   }

//   initMap = (location, zoomLevel) => {
//     new window.google.maps.Map(this.mapRef.current, {
//       center: location,
//       zoom: zoomLevel,
      // mapTypeId: 'satellite', // Set map type to 'satellite'
      // tilt: 45, // Set tilt
//     });
//   };

//   render() {
//     const { location } = this.props;

    // return (
    //   <section className="cerimony-section">
    //     <div className="map">
    //       <h2 className="map-h2">Ore XX:XX, presso la parrocchia dei SS Faustino e Giovita a Modena</h2>
    //       <div className="google-map" ref={this.mapRef} style={{ height: '100vh', width: '100%' }}>
    //         <LocationPin
    //           lat={location.lat}
    //           lng={location.lng}
    //           text={location.address}
    //         />
    //       </div>
    //     </div>
    //   </section>
    // );
//   }
// }

// export default Map;


class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <section className="cerimony-section">
        <div className="map">
          <h2 className="map-h2">Ore XX:XX, presso la parrocchia dei SS Faustino e Giovita a Modena</h2>
          <div className="circle-map" id={this.props.id} style={{ height: '100vh', width: '100%' }}>
          </div>
        </div>
      </section>
    );
    
    
    // return (
    //   <div style={{ width: 500, height: 500 }} id={this.props.id} />
    // );
  }
}

export default Map
