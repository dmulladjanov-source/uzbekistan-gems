import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Heart, Award, Users, Globe } from "lucide-react";
import tourBukhara from "@/assets/tour-bukhara.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Our Heritage",
    description:
      "We're not just guides – we're storytellers deeply connected to Uzbekistan's rich history and culture.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "Every detail matters. From accommodation to transportation, we ensure premium quality at every step.",
  },
  {
    icon: Users,
    title: "Personal Connections",
    description:
      "We believe travel is about people. Our small group approach means meaningful interactions and lasting memories.",
  },
  {
    icon: Globe,
    title: "Responsible Tourism",
    description:
      "We work with local communities, support artisan traditions, and promote sustainable travel practices.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              About JamTrips
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Born from a love for Uzbekistan and a passion for sharing its 
              wonders with the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={tourBukhara}
                alt="Beautiful Bukhara architecture"
                className="rounded-lg shadow-elevated w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground">
                Where Silk Road Dreams Come True
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                JamTrips was founded by a team of passionate Uzbek travel 
                professionals who grew up wandering the ancient streets of 
                Samarkand and Bukhara. We understand that visiting Uzbekistan 
                is more than just a trip – it's a journey through time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is simple: to share the real Uzbekistan with 
                travelers from around the world. Not just the monuments and 
                mosques, but the stories behind them. The warm hospitality of 
                our people. The flavors of our cuisine. The artistry that has 
                been passed down through generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience and countless happy travelers, we've 
                refined our approach to create journeys that are authentic, 
                comfortable, and unforgettable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
              Our Values
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              These principles guide everything we do, from planning your 
              itinerary to welcoming you home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Travelers" },
              { number: "50+", label: "Unique Itineraries" },
              { number: "5", label: "Years of Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
