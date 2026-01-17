import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    date: "November 2024",
    tour: "Classic Silk Road Journey",
    text: "JamTrips made our Uzbekistan adventure absolutely magical. Our guide's knowledge of Samarkand was incredible – we felt like we were traveling back in time. Every detail was perfectly arranged, from comfortable hotels to fascinating local restaurants.",
    rating: 5,
  },
  {
    name: "Thomas Weber",
    country: "Germany",
    date: "October 2024",
    tour: "Golden Triangle Tour",
    text: "Professional, punctual, and passionate about sharing their culture. The multi-day tour exceeded all our expectations. Our guide went above and beyond to show us hidden gems that weren't in the regular itinerary.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    country: "Italy",
    date: "September 2024",
    tour: "Bukhara Day Trip",
    text: "From the comfortable transfers to the knowledgeable guides, everything was perfect. Bukhara at sunset will stay with me forever. The attention to detail and genuine warmth of the team made this trip special.",
    rating: 5,
  },
  {
    name: "James & Linda Chen",
    country: "United States",
    date: "August 2024",
    tour: "Complete Uzbekistan Experience",
    text: "We spent 10 amazing days exploring Uzbekistan with JamTrips. The variety of experiences – from bazaars to ancient architecture to local homes – gave us a complete picture of this fascinating country. Highly recommend!",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    country: "France",
    date: "July 2024",
    tour: "Samarkand Day Trip",
    text: "Even though we only had one day, our guide made sure we saw everything important while also taking time to explain the history and significance of each site. The Registan at golden hour was breathtaking.",
    rating: 5,
  },
  {
    name: "Hans Mueller",
    country: "Switzerland",
    date: "June 2024",
    tour: "Khiva & Bukhara Tour",
    text: "Outstanding service from start to finish. The driver was always on time, the guide spoke excellent English, and the hotels were beyond expectations. Uzbekistan is now our favorite destination.",
    rating: 5,
  },
];

const Reviews = () => {
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
              Guest Experiences
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              Reviews
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Don't just take our word for it. Here's what travelers from around 
              the world say about their JamTrips experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground">
            <div className="text-center">
              <p className="text-6xl font-serif font-bold mb-2">5.0</p>
              <div className="flex items-center gap-1 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/70">Based on 150+ reviews</p>
            </div>
            <div className="w-px h-20 bg-primary-foreground/20 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-2xl font-serif font-semibold mb-2">
                "Exceptional in every way"
              </p>
              <p className="text-primary-foreground/70">
                Our guests consistently rate us 5 stars for service, 
                knowledge, and overall experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-card relative"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-card-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-serif font-semibold text-card-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {review.country} • {review.tour}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
