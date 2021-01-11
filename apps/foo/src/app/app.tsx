import React from 'react';

import { GoogleMapProvider, MapBox, Marker } from '@googlemap-react/core';

const KEY = 'INSERT_GOOGLE_MAPS_KEY_HERE';

export function App() {
  return (
    <GoogleMapProvider>
      {/* Hide close button in InfoWindow */}
      <style>{'.gm-style-iw > button { display: none !important; }'}</style>

      <MapBox
        apiKey={KEY}
        opts={{
          center: { lat: 39.211, lng: -100.874 },
          zoom: 4,
        }}
        style={{
          width: '100%',
          height: '500px',
        }}
      />

      {/* Including any marker throws "The id has already been taken" */}
      <Marker opts={{ lat: 39.211, lng: -100.874 }} />
    </GoogleMapProvider>
  );
}

export default App;
