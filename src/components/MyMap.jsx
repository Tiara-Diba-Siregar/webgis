import React, { Component } from "react";
import { MapContainer, ScaleControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../style/MyMap.css";

class MyMap extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "Normal",
          }}
        >
          GEOGRAPHICAL MAP
        </h1>
        <MapContainer
          style={{ height: "85vh" }}
          zoom={12}
          center={[-6.38976, 106.821498]}
          zoomControl={false}
        >
          <ScaleControl position="bottomleft" imperial={true} />
        </MapContainer>
      </div>
    );
  }
}
export default MyMap;
