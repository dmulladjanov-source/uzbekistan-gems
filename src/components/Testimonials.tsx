import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    text: "JamTrips made our Uzbekistan adventure absolutely magical. Our guide's knowledge of Samarkand was incredible – we felt like we were traveling back in time.",
    rating: 5,
  },
  {
    name: "Thomas Weber",
    country: "Germany",
    text: "Professional, punctual, and passionate about sharing their culture. The multi-day tour exceeded all our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    country: "Italy",
    text: "From the comfortable transfers to the knowledgeable guides, everything was perfect. Bukhara at sunset will stay with me forever.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-accent">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mt-3 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Join hundreds of satisfied travelers who discovered 
            Uzbekistan with JamTrips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/30" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-serif font-semibold text-primary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {testimonial.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
