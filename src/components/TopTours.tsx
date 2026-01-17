import { motion } from "framer-motion";
import { TourCard } from "./TourCard";
import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";

const tours = [
  {
    image: tourSamarkand,
    title: "Samarkand: The Jewel of the Silk Road",
    location: "Samarkand",
    duration: "Full Day (8-10 hours)",
    groupSize: "Private Tour",
    price: "$120",
    href: "/day-trips",
  },
  {
    image: tourBukhara,
    title: "Ancient Bukhara Walking Tour",
    location: "Bukhara",
    duration: "Full Day (6-8 hours)",
    groupSize: "Private Tour",
    price: "$95",
    href: "/day-trips",
  },
  {
    image: tourKhiva,
    title: "Khiva: The Museum City",
    location: "Khiva",
    duration: "Full Day (5-7 hours)",
    groupSize: "Private Tour",
    price: "$85",
    href: "/day-trips",
  },
];

export function TopTours() {
  return (
    <section className="section-padding bg-sand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-accent">
            Popular Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Our Top Tours
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Handcrafted itineraries designed to immerse you in Uzbekistan's 
            rich history, stunning architecture, and warm hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour.title} {...tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
