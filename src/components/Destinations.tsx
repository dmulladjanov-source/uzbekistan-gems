import { useLanguage } from "@/contexts/LanguageContext";
import { DestinationCard } from "./DestinationCard";

import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";
import tourTashkent from "@/assets/tour-tashkent.jpg";
import tourShahrisabz from "@/assets/tour-shahrisabz.jpg";

export function Destinations() {
  const { t } = useLanguage();

  const destinations = [
    {
      id: "tashkent",
      name: t("destinations.tashkent.name"),
      description: t("destinations.tashkent.description"),
      image: tourTashkent,
      link: "/destinations/tashkent",
    },
    {
      id: "samarkand",
      name: t("destinations.samarkand.name"),
      description: t("destinations.samarkand.description"),
      image: tourSamarkand,
      link: "/destinations/samarkand",
    },
    {
      id: "bukhara",
      name: t("destinations.bukhara.name"),
      description: t("destinations.bukhara.description"),
      image: tourBukhara,
      link: "/destinations/bukhara",
    },
    {
      id: "khiva",
      name: t("destinations.khiva.name"),
      description: t("destinations.khiva.description"),
      image: tourKhiva,
      link: "/destinations/khiva",
    },
    {
      id: "shahrisabz",
      name: t("destinations.shahrisabz.name"),
      description: t("destinations.shahrisabz.description"),
      image: tourShahrisabz,
      link: "/destinations/shahrisabz",
    },
    {
      id: "boysun",
      name: t("destinations.boysun.name"),
      description: t("destinations.boysun.description"),
      image: tourBukhara,
      link: "/destinations/boysun",
    },
    {
      id: "derbent",
      name: t("destinations.derbent.name"),
      description: t("destinations.derbent.description"),
      image: tourKhiva,
      link: "/destinations/derbent",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
            {t("destinations.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              description={destination.description}
              image={destination.image}
              link={destination.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
