"use client";
import { useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface MapProps {
  googleMapsApiKey: string;
  mapCenter: { lat: number; lng: number };
}

const MapComponent: React.FC<MapProps> = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string;
  const libraries = useMemo(() => ["places"], []);

  const [mapCenter, setMapCenter] = useState({
    lat: -33.8688,
    lng: 151.2093,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapId: null,
      mapIds: null,
      styles: [
        // Customize map styles to simplify the view
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#325e96" }],
        },

        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#e0b708" }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f3f3f3" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#a0a0a0" }],
        },
      ],
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden">
      <GoogleMap
        options={mapOptions}
        zoom={11}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <Marker
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
          icon={{
            url: "/profile-7.png",
            scaledSize: new window.google.maps.Size(90, 90),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(45, 50),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
