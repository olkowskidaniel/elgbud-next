"use client";

import css from "./map-wrapper.module.css";

import { useState, useCallback, memo } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const center = {
  lat: 53.065363,
  lng: 18.921129,
};

const defaultMapOptions = {
  zoomControl: true,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const defaultMapZoom = 17;

const MapWrapper = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  return (
    <div className={css.container}>
      <p className={css.title}>Znajdziesz nas tutaj</p>
      <div className={css["map-container"]}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
          >
            <Marker
              position={{ lat: 53.065363, lng: 18.921129 }}
              animation={2}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default memo(MapWrapper);
