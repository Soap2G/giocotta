import React, { Component } from 'react';

import './map.css'

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
      s.src = 'https://maps.google.com/maps/api/js?key=AIzaSyDHt_t8JpH6nqKsAgc3l7SNLfIkRQAEZHc';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <section className="cerimony-section"
      data-scroll
      >
        <div className="map">
          <h2 
          className="map-h2" 
          data-scroll 
          >
            Ore XX:XX, presso la parrocchia dei SS Faustino e Giovita a Modena
          </h2>
          <p
          data-scroll 
          >
            No, non è un hangar, è una chiesa :D</p>
            
          <div className="circle__wrapper" 
          data-scroll
          data-scroll-class="circle"
          id={this.props.id}>
          </div>
        </div>
      </section>
    );

  }
}

export default Map
