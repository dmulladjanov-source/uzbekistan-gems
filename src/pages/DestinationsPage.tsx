import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { DestinationCard } from "@/components/DestinationCard";

import tourSamarkand from "@/assets/tour-samarkand.jpg";
import tourBukhara from "@/assets/tour-bukhara.jpg";
import tourKhiva from "@/assets/tour-khiva.jpg";
import tourTashkent from "@/assets/tour-tashkent.jpg";
import tourShahrisabz from "@/assets/tour-shahrisabz.jpg";

const DestinationsPage = () => {
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
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            {t("destinations.pageTitle")}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {t("destinations.pageSubtitle")}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
    </Layout>
  );
};

export default DestinationsPage;
