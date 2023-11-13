import './map.css';
import React, { useRef, useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Map = (props) => {
  const [scroll, setScroll] = useState(0);
  const mapRef = useRef(null); // useRef hook to reference the map container

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    // Google Maps API loader
    const loader = new Loader({
      apiKey: "AIzaSyDHt_t8JpH6nqKsAgc3l7SNLfIkRQAEZHc", // Replace with your API key
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google; // Access the global google object
      const map = new google.maps.Map(mapRef.current, props.options);
      if (props.onMapLoad) props.onMapLoad(map);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [props.options, props.onMapLoad]);

  const holeSize = Math.min(1, scroll / 700); // Adjust 500 to control the speed of the hole expansion

  return (
    <ScrollAnimation animateIn="flipOutX" className='red-square'>
      <div className="red-square" style={{ transform: `scale(${holeSize})` }}>
        <div ref={mapRef} className='map-container'></div>
      </div>
    </ScrollAnimation>
  );

};

export default Map;
