'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContent = dynamic(() => import('./MapContent'), { ssr: false });

const locations = [
  {
    id: 'india',
    city: 'India',
    flag: 'in',
    coordinates: [22.0, 78.0],
    zoom: 5,
    markers: [
      { name: 'Punjab', coords: [30.9009, 75.8572], geojsonFile: 'punjab' },
      { name: 'Gujarat', coords: [23.0225, 72.5714], geojsonFile: 'gujarat' }
    ],
    address: [
      "SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603",
      "Call us +91-90565-44487",
      "310 - Sampada, Navarangpura, Ahmedabad",
      "Gujarat - 380009"
    ]
  },
  {
    id: 'uk',
    city: 'UK',
    flag: 'gb',
    coordinates: [54.0, -2.0],
    zoom: 6,
    markers: [
      { name: 'London', coords: [51.5074, -0.1278], geojsonFile: null }
    ],
    address: [
      "20-22 Wenlock Road, Hoxton, London N1 7GU"
    ]
  },
  {
    id: 'usa',
    city: 'USA',
    flag: 'us',
    coordinates: [39.0, -98.0],
    zoom: 4,
    markers: [
      { name: 'New York', coords: [41.1345, -73.9318], geojsonFile: 'newyork' }
    ],
    address: [
      "616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989"
    ]
  },
  {
    id: 'canada',
    city: 'Canada',
    flag: 'ca',
    coordinates: [55.0, -106.0],
    zoom: 4,
    markers: [
      { name: 'British Columbia', coords: [49.1632, -122.8998], geojsonFile: 'britishcolumbia' }
    ],
    address: [
      "8449,116 A Street, Delta - V4C7N7, Greater Vancouver",
      "Call us +1 (778) 798-9624"
    ]
  },
  {
    id: 'dubai',
    city: 'Dubai',
    flag: 'ae',
    coordinates: [25.2, 55.27],
    zoom: 9,
    markers: [
      { name: 'Dubai', coords: [25.1848, 55.2639], geojsonFile: 'dubai' }
    ],
    address: [
      "Suite No 2902 and 2903,",
      "The Prism Tower, Business Bay, Dubai, UAE"
    ]
  }
];

const GlobalPresence = () => {
  const [activeLoc, setActiveLoc] = useState(locations[0]);
  const [geoData, setGeoData] = useState({});
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    const files = ['punjab', 'gujarat', 'newyork', 'britishcolumbia', 'dubai'];
    files.forEach(file => {
      fetch(`/about_assets/maps/${file}.geojson`)
        .then(res => res.json())
        .then(data => setGeoData(prev => ({ ...prev, [file]: data })))
        .catch(() => console.error('Failed to load map data:', file));
    });
  }, []);

  return (
    <section className="ap-global-section" id="global">
      <div className="ap-global-container">
        <h2 className="ap-global-title">Global Presence</h2>

        <div className="ap-global-box">
          <div className="ap-global-list-container">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className={`ap-global-card ${activeLoc.id === loc.id ? 'ap-active' : ''}`}
                onClick={() => setActiveLoc(loc)}
              >
                <img
                  src={`https://flagcdn.com/w40/${loc.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${loc.flag}.png 2x`}
                  alt={loc.city}
                  width="40"
                  height="30"
                  loading="lazy"
                  decoding="async"
                  className="ap-global-flag"
                />
                <div className="ap-global-card-text">
                  <h4>{loc.city}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="ap-global-image-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', zIndex: 0 }}>
            {mounted && (
              <MapContent
                activeLoc={activeLoc}
                geoData={geoData}
                locations={locations}
                tileUrl="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
            )}

            <div className="ap-address-overlay ap-fade-in" key={`${activeLoc.id}-addr`} style={{ zIndex: 1000, pointerEvents: 'none' }}>
              <h4>{activeLoc.city} Office</h4>
              {activeLoc.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
