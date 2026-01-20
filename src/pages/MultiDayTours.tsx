import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Clock, MapPin, Users, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import heroImage from "@/assets/hero-registan.jpg";

const MultiDayTours = () => {
  const { t } = useLanguage();

  const multiDayTours = [
    {
      image: heroImage,
      title: t("multiDay.classic.title"),
      duration: t("multiDay.classic.duration"),
      cities: [t("city.tashkent"), t("city.samarkand"), t("city.bukhara"), t("city.khiva")],
      price: "$890",
      highlights: [
        t("multiDay.classic.h1"),
        t("multiDay.classic.h2"),
        t("multiDay.classic.h3"),
        t("multiDay.classic.h4"),
        t("multiDay.classic.h5"),
      ],
    },
    {
      image: tourSamarkand,
      title: t("multiDay.golden.title"),
      duration: t("multiDay.golden.duration"),
      cities: [t("city.tashkent"), t("city.samarkand"), t("city.bukhara")],
      price: "$650",
      highlights: [
        t("multiDay.golden.h1"),
        t("multiDay.golden.h2"),
        t("multiDay.golden.h3"),
        t("multiDay.golden.h4"),
        t("multiDay.golden.h5"),
      ],
    },
    {
      image: tourBukhara,
      title: t("multiDay.complete.title"),
      duration: t("multiDay.complete.duration"),
      cities: [t("city.tashkent"), "Фергана", t("city.samarkand"), t("city.shahrisabz"), t("city.bukhara"), t("city.khiva")],
      price: "$1,450",
      highlights: [
        t("multiDay.complete.h1"),
        t("multiDay.complete.h2"),
        t("multiDay.complete.h3"),
        t("multiDay.complete.h4"),
        t("multiDay.complete.h5"),
      ],
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
              {t("multiDay.badge")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              {t("multiDay.title")}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              {t("multiDay.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {multiDayTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-auto lg:min-h-[300px]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-accent-foreground rounded-full text-xs sm:text-sm font-semibold">
                        {t("tours.from")} {tour.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-card-foreground mb-3 sm:mb-4">
                      {tour.title}
                    </h2>

                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex items-center text-sm sm:text-base text-muted-foreground">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent flex-shrink-0" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center text-sm sm:text-base text-muted-foreground">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent flex-shrink-0" />
                        {t("tours.privateTour")}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-4 sm:mb-6 flex-wrap">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex flex-wrap gap-x-1 gap-y-0.5">
                        {tour.cities.map((city, i) => (
                          <span key={city} className="text-sm sm:text-base text-muted-foreground">
                            {city}
                            {i < tour.cities.length - 1 && " →"}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                      {tour.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start text-sm sm:text-base text-muted-foreground"
                        >
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-accent flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="premium" asChild className="w-full sm:w-auto min-h-[48px]">
                      <Link to="/contact">
                        {t("multiDay.bookTour")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MultiDayTours;
