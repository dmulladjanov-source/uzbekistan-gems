import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Car, Plane, Train, Users, Clock, Shield, ArrowRight, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Transfers = () => {
  const { t } = useLanguage();

  const transferTypes = [
    {
      icon: Plane,
      title: t("transfers.airport.title"),
      description: t("transfers.airport.desc"),
      features: [t("transfers.airport.f1"), t("transfers.airport.f2"), t("transfers.airport.f3")],
      price: t("tours.from") + " $25",
    },
    {
      icon: Car,
      title: t("transfers.city.title"),
      description: t("transfers.city.desc"),
      features: [t("transfers.city.f1"), t("transfers.city.f2"), t("transfers.city.f3")],
      price: t("tours.from") + " $200",
    },
    {
      icon: Train,
      title: t("transfers.train.title"),
      description: t("transfers.train.desc"),
      features: [t("transfers.train.f1"), t("transfers.train.f2"), t("transfers.train.f3")],
      price: t("tours.from") + " $20",
    },
    {
      icon: Ticket,
      title: t("transfers.afrosiyob.title"),
      description: t("transfers.afrosiyob.desc"),
      features: [t("transfers.afrosiyob.f1"), t("transfers.afrosiyob.f2"), t("transfers.afrosiyob.f3"), t("transfers.afrosiyob.f4")],
      price: t("tours.from") + " $70",
    },
  ];

  const routes = [
    { from: t("city.tashkent"), to: t("city.samarkand"), duration: "4 ч", price: "$220" },
    { from: t("city.samarkand"), to: t("city.bukhara"), duration: "3.5 ч", price: "$200" },
    { from: t("city.bukhara"), to: t("city.khiva"), duration: "6 ч", price: "$250" },
    { from: t("city.tashkent"), to: t("city.bukhara"), duration: "6 ч", price: "$350" },
    { from: t("city.tashkent") + " Airport", to: "City Center", duration: "30 мин", price: "$25" },
    { from: t("city.samarkand") + " Airport", to: "City Center", duration: "20 мин", price: "$20" },
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
              {t("transfers.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              {t("transfers.title")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("transfers.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transfer Types */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {transferTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <type.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-accent">{type.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Popular Routes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
              {t("transfers.popular")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("transfers.popularDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-card-foreground">{route.from}</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                  <span className="font-medium text-card-foreground">{route.to}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {route.duration}
                  </div>
                  <span className="font-semibold text-accent">{route.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact">
                {t("transfers.bookTransfer")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {t("transfers.safe")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("transfers.safeDesc")}
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {t("transfers.onTime")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("transfers.onTimeDesc")}
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {t("transfers.anyGroup")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("transfers.anyGroupDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transfers;
