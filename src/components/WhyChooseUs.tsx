import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Local Expertise",
    description:
      "Our guides are born and raised in Uzbekistan, offering authentic insights and hidden gems.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description:
      "Licensed operators with a perfect safety record and comprehensive travel insurance.",
  },
  {
    icon: Users,
    title: "Private Tours",
    description:
      "Personalized experiences tailored to your interests, pace, and travel style.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Handpicked hotels, comfortable vehicles, and exceptional service standards.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Tours that adapt to your timeline. Early morning, evening, or custom timings.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance throughout your journey in Uzbekistan.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-accent">
            The JamTrips Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't just show you Uzbekistan – we help you feel it. 
            Every journey is crafted with passion and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-lg bg-card hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
