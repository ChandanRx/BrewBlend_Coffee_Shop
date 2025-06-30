import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Custom Bike Icon
const bikeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2972/2972185.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const destinationIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const TrackOrder = () => {
  const [bikePos, setBikePos] = useState([23.0225, 72.5714]); // Start (Ahmedabad)
  const destination = [23.0300, 72.5800];
  const [route, setRoute] = useState([bikePos]);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBikePos((prev) => {
        const [lat, lng] = prev;
        const [destLat, destLng] = destination;

        const step = 0.0006;
        const newLat = lat < destLat ? lat + step : lat;
        const newLng = lng < destLng ? lng + step : lng;

        const arrived = Math.abs(newLat - destLat) < 0.0006 && Math.abs(newLng - destLng) < 0.0006;
        if (arrived) {
          clearInterval(interval);
          setDelivered(true);
          return destination;
        }

        const newPos = [newLat, newLng];
        setRoute((prevRoute) => [...prevRoute, newPos]);
        return newPos;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#f4f4f4] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#2e2e2e]">
          Track Your Order
        </h2>

        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={bikePos} zoom={15} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline positions={route} color="#2e2e2e" weight={4} />

            <Marker position={bikePos} icon={bikeIcon}>
              <Popup>Delivery is on the way 🏍️</Popup>
            </Marker>

            <Marker position={destination} icon={destinationIcon}>
              <Popup>Delivery Address 📍</Popup>
            </Marker>
          </MapContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-[#2e2e2e]"
        >
          <p className="text-lg font-medium">
            {delivered ? 'Your order has arrived! 🎉' : 'Your order is on the way!'}
          </p>
          <p className="text-sm text-[#444]">
            {delivered ? 'Delivered just now' : 'Estimated arrival: 6–10 minutes'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackOrder;
