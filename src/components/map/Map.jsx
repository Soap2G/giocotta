/* global google */
import React, { Component } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import './map.css';

class Map extends Component {
  componentDidMount() {
    const loader = new Loader({
      apiKey: "AIzaSyDHt_t8JpH6nqKsAgc3l7SNLfIkRQAEZHc",
      version: "weekly",
      // ...additionalOptions,
    });

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
      const map = new Map(document.getElementById(this.props.id), this.props.options);
      this.props.onMapLoad(map);
    });
  }

  render() {
    return (
      <section className="cerimony-section" data-scroll>
        <div className="map">
          <h2 className="map-h2" data-scroll>
            Alle 15:30, nella parrocchia dei SS Faustino e Giovita a Modena
          </h2>
          <p data-scroll>
            Via Giardini 231, 41124, Modena (MO) <br/>
            No, non è un hangar, è una chiesa :D
          </p>
          
          <div className="circle-map" 
            data-scroll
            data-scroll-class="inflate"
            data-scroll-repeat="true"
            id={this.props.id}>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
