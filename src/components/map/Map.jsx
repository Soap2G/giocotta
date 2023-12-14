/* global google */
import './map.css';
import React, { useRef, useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Map = ({ options, onMapLoad, locations }) => {
  const [scroll, setScroll] = useState(0);
  const mapRef = useRef(null);

  // Function to add a marker at a given location
  const addMarker = (map, location) => {
    let icon = {
      url: location.icon,
      size: new google.maps.Size(location.size_x, location.size_y), // Set the desired width and height
      scaledSize: new google.maps.Size(location.size_x, location.size_y) // This scales the icon
    };
  
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: location.info // Content of the InfoWindow
    });
  
    // Add listener to the marker, not the icon
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  };
  

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll, {passive: true});

    const loader = new Loader({
      apiKey: "AIzaSyDHt_t8JpH6nqKsAgc3l7SNLfIkRQAEZHc",
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, options);
      if (onMapLoad) onMapLoad(map);

      // Add markers to the map
      locations.forEach(location => addMarker(map, location));
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [options, onMapLoad, locations]);

  const holeSize = Math.min(1, scroll / 1150);

  return (
    <ScrollAnimation animateIn="flipOutX" className='red-square'>
      <div className="red-square" style={{ transform: `scale(${holeSize})` }}>
        <div ref={mapRef} className='map-container'></div>
      </div>
    </ScrollAnimation>
  );
};

export default Map;
