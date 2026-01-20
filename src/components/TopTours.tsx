import { motion } from "framer-motion";
import { TourCard } from "./TourCard";
import { useLanguage } from "@/contexts/LanguageContext";
import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";

export function TopTours() {
  const { t, language } = useLanguage();

  const tours = [
    {
      image: tourSamarkand,
      title: language === "ru" ? "Самарканд: Жемчужина Шёлкового пути" : "Samarkand: The Jewel of the Silk Road",
      location: t("city.samarkand"),
      duration: language === "ru" ? "Полный день (8-10 часов)" : "Full Day (8-10 hours)",
      groupSize: t("tours.privateTour"),
      price: "$150",
      href: "/day-trips",
    },
    {
      image: tourBukhara,
      title: language === "ru" ? "Древняя Бухара: Пешая прогулка" : "Ancient Bukhara Walking Tour",
      location: t("city.bukhara"),
      duration: language === "ru" ? "Полный день (6-8 часов)" : "Full Day (6-8 hours)",
      groupSize: t("tours.privateTour"),
      price: "$95",
      href: "/day-trips",
    },
    {
      image: tourKhiva,
      title: language === "ru" ? "Хива: Город-музей" : "Khiva: The Museum City",
      location: t("city.khiva"),
      duration: language === "ru" ? "Полный день (5-7 часов)" : "Full Day (5-7 hours)",
      groupSize: t("tours.privateTour"),
      price: "$85",
      href: "/day-trips",
    },
  ];

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
            {t("tours.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            {t("tours.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("tours.description")}
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
