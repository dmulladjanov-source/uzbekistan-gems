import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { TourCard } from "@/components/TourCard";
import { useLanguage } from "@/contexts/LanguageContext";
import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";
import tourTashkent from "@/assets/tour-tashkent.jpg";
import tourShahrisabz from "@/assets/tour-shahrisabz.jpg";

const DayTrips = () => {
  const { t } = useLanguage();

  const dayTrips = [
    {
      image: tourSamarkand,
      title: t("dayTrips.samarkand.title"),
      location: t("city.samarkand"),
      duration: t("dayTrips.samarkand.duration"),
      groupSize: t("tours.privateTour"),
      price: "$150",
      href: "/contact",
    },
    {
      image: tourBukhara,
      title: t("dayTrips.bukhara.title"),
      location: t("city.bukhara"),
      duration: t("dayTrips.bukhara.duration"),
      groupSize: t("tours.privateTour"),
      price: "$170 на чел.",
      href: "/contact",
    },
    {
      image: tourKhiva,
      title: t("dayTrips.khiva.title"),
      location: t("city.khiva"),
      duration: t("dayTrips.khiva.duration"),
      groupSize: t("tours.privateTour"),
      price: "$85",
      href: "/contact",
    },
    {
      image: tourTashkent,
      title: t("dayTrips.tashkent.title"),
      location: t("city.tashkent"),
      duration: t("dayTrips.tashkent.duration"),
      groupSize: t("tours.privateTour"),
      price: "$65",
      href: "/contact",
    },
    {
      image: tourShahrisabz,
      title: t("dayTrips.shahrisabz.title"),
      location: t("city.shahrisabz"),
      duration: t("dayTrips.shahrisabz.duration"),
      groupSize: t("tours.privateTour"),
      price: "$110",
      href: "/contact",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-accent">
              {t("dayTrips.badge")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              {t("dayTrips.title")}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              {t("dayTrips.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
