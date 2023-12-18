"use client";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BeracunIcon from "../app/assets/Berbahaya.svg";
import NoDataIcon from "../app/assets/Empty.svg";
import "leaflet/dist/leaflet.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  apiDataAtom,
  selectedDateAtom,
  selectedCityDataAtom,
  selectedDateChangeAtom,
} from "../app/jotai-functions/dynamicatoms";

const MapComponent = () => {
  const [apiDataResponse] = useAtom(apiDataAtom);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [, setSelectedCityData] = useAtom(selectedCityDataAtom);
  const [selectedDateChange, setSelectedDateChange] = useAtom(
    selectedDateChangeAtom
  );

  if (apiDataResponse instanceof Promise) {
    return <div>Loading...</div>; // Loading state
  }

  if (apiDataResponse instanceof Error) {
    return <div>Error: {apiDataResponse.message}</div>; // Error state
  }

  const apiData = apiDataResponse; // The actual data

  // Define the coordinates for each city
  const cities = {
    1: { name: "Jakarta", coordinates: [-6.2088, 106.8456] },
    2: { name: "Bandung", coordinates: [-6.9175, 107.6191] },
    3: { name: "Medan", coordinates: [3.5952, 98.6722] },
  };

  const filteredData = apiData
    ? apiData.filter((item) => {
        const itemDate = new Date(item.time);
        return (
          itemDate.getUTCFullYear() === selectedDate.getUTCFullYear() &&
          itemDate.getUTCMonth() === selectedDate.getUTCMonth() &&
          itemDate.getUTCDate() === selectedDate.getUTCDate()
        );
      })
    : [];

  return (
    <div className="">
      <MapContainer
        style={{
          height: "91vh",
          width: "100%",
        }}
        center={cities[1].coordinates} // Initial center position
        zoom={13}
        scrollWheelZoom={true}
      >
        <div className=" mx-auto absolute top-4 left-20 z-[1000]">
          <div className=" mx-auto space-y-6">
            <DatePicker
              selected={selectedDateChange}
              onChange={(date) => {
                setSelectedDateChange(date);
                setSelectedDate(date); // Update the selectedDate atom when the date is changed
                setSelectedCityData(null); // Reset the selected city data when the date is changed
              }}
            />
          </div>
        </div>
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          minZoom={0}
          maxZoom={20}
        />
        {Object.entries(cities).map(([cityId, city]) => {
          const cityData = filteredData.filter(
            (item) => Number(item.cityId) === Number(cityId)
          );
          return (
            <Marker
              key={cityId}
              icon={
                new L.Icon({
                  iconUrl:
                    cityData.length === 0 ? NoDataIcon.src : BeracunIcon.src,
                  iconRetinaUrl:
                    cityData.length === 0 ? NoDataIcon.src : BeracunIcon.src,
                  iconSize: [100, 100],
                  iconAnchor: [0, 0],
                  popupAnchor: [0, 0],
                })
              }
              position={city.coordinates}
              eventHandlers={{
                click: () => {
                  if (cityData.length > 0) {
                    const cityDataWithCityName = cityData.map((item) => ({
                      ...item,
                      cityName: city.name,
                    }));
                    setSelectedCityData(cityDataWithCityName[0]); // Update the selected city data when the marker is clicked
                  }
                },
              }}
            >
              <Popup open={true}>
                {cityData.length === 0 ? (
                  <div>No data for this date</div>
                ) : (
                  cityData.map((item) => (
                    <div key={item.id}>
                      <h2>{city.name} - {item.polution} US</h2>
                    </div>
                  ))
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
