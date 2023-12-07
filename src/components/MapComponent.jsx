"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <div className="rounded-xl shadow-tremor-card">
      <MapContainer style={{ 
        height: "70vh", 
        width: "90vw",
        borderRadius: "1rem",
        borderWidth: "1.5px",
        borderColor: "#e5e5e5"
         }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[51.505, -0.09]}
        >
            <Popup>
                Testing
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
