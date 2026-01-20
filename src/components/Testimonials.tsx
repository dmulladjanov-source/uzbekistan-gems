import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = language === "ru" ? [
    {
      name: "Сара Митчелл",
      country: "Великобритания",
      text: "JamTrips сделали наше путешествие по Узбекистану абсолютно волшебным. Знания нашего гида о Самарканде были невероятными – мы чувствовали себя путешественниками во времени.",
      rating: 5,
    },
    {
      name: "Томас Вебер",
      country: "Германия",
      text: "Профессионально, пунктуально и с любовью к своей культуре. Многодневный тур превзошёл все наши ожидания. Настоятельно рекомендую!",
      rating: 5,
    },
    {
      name: "Елена Росси",
      country: "Италия",
      text: "От комфортных трансферов до знающих гидов – всё было идеально. Бухара на закате останется со мной навсегда.",
      rating: 5,
    },
  ] : [
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

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-accent">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-2 sm:mt-3 mb-4 sm:mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed px-2">
            {t("testimonials.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 relative"
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 h-8 w-8 sm:h-10 sm:w-10 text-accent/30" />
              
              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              
              <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-serif font-semibold text-primary-foreground text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-primary-foreground/60">
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
