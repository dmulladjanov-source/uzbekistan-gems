import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { TourCard } from "@/components/TourCard";
import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";
import tourTashkent from "@/assets/tour-tashkent.jpg";
import tourShahrisabz from "@/assets/tour-shahrisabz.jpg";

const dayTrips = [
  {
    image: tourSamarkand,
    title: "Samarkand: The Jewel of the Silk Road",
    location: "Samarkand",
    duration: "Full Day (8-10 hours)",
    groupSize: "Private Tour",
    price: "$120",
    href: "/contact",
  },
  {
    image: tourBukhara,
    title: "Ancient Bukhara Walking Tour",
    location: "Bukhara",
    duration: "Full Day (6-8 hours)",
    groupSize: "Private Tour",
    price: "$95",
    href: "/contact",
  },
  {
    image: tourKhiva,
    title: "Khiva: The Museum City",
    location: "Khiva",
    duration: "Full Day (5-7 hours)",
    groupSize: "Private Tour",
    price: "$85",
    href: "/contact",
  },
  {
    image: tourTashkent,
    title: "Tashkent City Discovery",
    location: "Tashkent",
    duration: "Half Day (4-5 hours)",
    groupSize: "Private Tour",
    price: "$65",
    href: "/contact",
  },
  {
    image: tourShahrisabz,
    title: "Shahrisabz: Birthplace of Timur",
    location: "Shahrisabz",
    duration: "Full Day (7-8 hours)",
    groupSize: "Private Tour",
    price: "$110",
    href: "/contact",
  },
];

const DayTrips = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-accent">
              One-Day Experiences
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              Day Trips
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Perfect for travelers with limited time. Explore Uzbekistan's 
              UNESCO World Heritage sites with our expertly guided day excursions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTrips.map((tour, index) => (
              <TourCard key={tour.title} {...tour} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayTrips;
