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
      <section className="pt-32 pb-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-accent">
              {t("multiDay.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              {t("multiDay.title")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("multiDay.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {multiDayTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[300px]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                        {t("tours.from")} {tour.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-card-foreground mb-4">
                      {tour.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-5 w-5 mr-2 text-accent" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-5 w-5 mr-2 text-accent" />
                        {t("tours.privateTour")}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6 flex-wrap">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                      {tour.cities.map((city, i) => (
                        <span key={city} className="text-muted-foreground">
                          {city}
                          {i < tour.cities.length - 1 && " →"}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-8">
                      {tour.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center text-muted-foreground"
                        >
                          <Check className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Button variant="premium" asChild>
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
