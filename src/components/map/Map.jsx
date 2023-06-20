import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

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
      s.src = 'https://maps.google.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}';
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
      <section className="cerimony-section">
        <div className="map">
          <h2 className="map-h2">Ore XX:XX, presso la parrocchia dei SS Faustino e Giovita a Modena</h2>
          <div className="circle-map" id={this.props.id} style={{ height: '50vh', width: '50vh' }}>
          </div>
        </div>
      </section>
    );

  }
}

export default Map
