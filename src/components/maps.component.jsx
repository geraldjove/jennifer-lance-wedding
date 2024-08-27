import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const GoogleMaps = () => {
  const position = { lat: 14.6098, lng: 121.0142 };
  return (
    <APIProvider apiKey={`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}>
      <div className="h-[500px] w-[100%] ">
        <Map
          defaultZoom={18}
          defaultCenter={position}
          mapId={`${import.meta.env.VITE_PUBLIC_MAP_ID}`}
        >
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMaps;
