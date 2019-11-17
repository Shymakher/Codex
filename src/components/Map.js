import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import "../scss/Map.scss";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.0224,
      lng: 34.7651
    },
    zoom: 11
  };

  handleGoogleMapApi(google) {
    const map = google.map;
    let drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setOptions({
      drawingMode : google.maps.drawing.OverlayType.RECTANGLE,
      drawingControl : true,
      drawingControlOptions : {
        position : google.maps.ControlPosition.TOP_CENTER,
        drawingModes : [ google.maps.drawing.OverlayType.RECTANGLE ]
      },
      rectangleOptions : {
        strokeColor : '#ed4e79',
        strokeWeight : 1,
        fillOpacity : 0,
        editable: true,
        draggable: true
      }
    });
    drawingManager.setMap(map);
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyCu16CUyJwK4GsEWOAgIV3_9GcY1fKVgME" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={ this.handleGoogleMapApi.bind(this) }
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;