import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Car, Plane, Train, Users, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const transferTypes = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off at all major Uzbekistan airports.",
    features: ["Meet & greet service", "Flight tracking", "24/7 availability"],
    price: "From $25",
  },
  {
    icon: Car,
    title: "City-to-City Transfers",
    description: "Comfortable private transfers between Uzbekistan's legendary cities.",
    features: ["Air-conditioned vehicles", "Professional drivers", "Flexible scheduling"],
    price: "From $80",
  },
  {
    icon: Train,
    title: "Train Station Transfers",
    description: "Convenient connections to and from Uzbekistan's modern railway stations.",
    features: ["Afrosiyob high-speed train connections", "Luggage assistance", "On-time guarantee"],
    price: "From $20",
  },
];

const routes = [
  { from: "Tashkent", to: "Samarkand", duration: "4 hours", price: "$120" },
  { from: "Samarkand", to: "Bukhara", duration: "3.5 hours", price: "$100" },
  { from: "Bukhara", to: "Khiva", duration: "6 hours", price: "$180" },
  { from: "Tashkent", to: "Bukhara", duration: "6 hours", price: "$200" },
  { from: "Tashkent Airport", to: "City Center", duration: "30 min", price: "$25" },
  { from: "Samarkand Airport", to: "City Center", duration: "20 min", price: "$20" },
];

const Transfers = () => {
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
              Travel in Comfort
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              Private Transfers
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Reliable, comfortable transportation across Uzbekistan. 
              Modern vehicles, professional drivers, and door-to-door service.
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
              Popular Routes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fixed prices, no hidden fees. All transfers include comfortable 
              air-conditioned vehicles and English-speaking drivers.
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
                Book a Transfer
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
                Safe & Insured
              </h3>
              <p className="text-muted-foreground text-sm">
                All vehicles fully insured with experienced, licensed drivers.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-2">
                On-Time Guarantee
              </h3>
              <p className="text-muted-foreground text-sm">
                Punctuality is our priority. We track flights and adjust accordingly.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Any Group Size
              </h3>
              <p className="text-muted-foreground text-sm">
                From solo travelers to large groups, we have the right vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transfers;
