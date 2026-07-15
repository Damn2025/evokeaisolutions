'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, GeoJSON, useMap } from 'react-leaflet';

function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5
    });
  }, [center, zoom, map]);
  return null;
}

export default function MapContent({ activeLoc, geoData, locations, tileUrl }) {
  return (
    <MapContainer 
      center={activeLoc.coordinates} 
      zoom={activeLoc.zoom} 
      style={{ height: "100%", width: "100%", background: '#f8fafc', minHeight: '400px' }}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={tileUrl}
        attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
      />
      <MapUpdater center={activeLoc.coordinates} zoom={activeLoc.zoom} />
      
      {locations.flatMap((loc) => 
        loc.markers.map((marker, index) => (
          <React.Fragment key={`${loc.id}-${index}`}>
            {activeLoc.id === loc.id && marker.geojsonFile && geoData[marker.geojsonFile] && (
              <GeoJSON 
                key={`${marker.geojsonFile}-${activeLoc.id}`}
                data={geoData[marker.geojsonFile]}
                pathOptions={{
                  color: '#0ea5e9',
                  weight: 2,
                  opacity: 0.7,
                  dashArray: '6, 6',
                  fillOpacity: 0,
                }}
              />
            )}
            <CircleMarker
              center={marker.coords}
              radius={activeLoc.id === loc.id ? 10 : 6}
              pathOptions={{
                fillColor: activeLoc.id === loc.id ? "#2bd392" : "#444",
                color: activeLoc.id === loc.id ? "#ffffff" : "transparent",
                weight: 2,
                fillOpacity: 0.9,
              }}
            >
              <Popup>
                <div style={{ color: '#000', fontWeight: 'bold' }}>
                  {marker.name} Office
                </div>
              </Popup>
            </CircleMarker>
          </React.Fragment>
        ))
      )}
    </MapContainer>
  );
}
