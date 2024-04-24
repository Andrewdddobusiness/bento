"use client";
import { useMemo, useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface MapProps {
  googleMapsApiKey: string;
  mapCenter: { lat: number; lng: number };
}

const MapComponent: React.FC<{}> = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string;
  const libraries = useMemo(() => ["places"], []);

  const [mapCenter, setMapCenter] = useState({
    lat: -33.8688,
    lng: 151.2093,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check on component mount

    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const lightModeStyles = [
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
  ];

  const darkModeStyles = [
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
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#e0b708" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#2c2c2c" }],
    },

    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#333333" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#1a1a1a" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8a8a8a" }],
    },
  ];

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapId: null,
      mapIds: null,
      styles: isDarkMode ? darkModeStyles : lightModeStyles,
    }),
    [isDarkMode]
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
