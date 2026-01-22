import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-registan.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Registan Square in Samarkand, Uzbekistan at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium tracking-wider uppercase bg-accent/20 text-accent rounded-full border border-accent/30">
            {t("hero.badge")}
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-primary-foreground leading-tight mb-4 sm:mb-6 px-2">
            {t("hero.title")}{" "}
            <span className="text-accent italic">{t("hero.titleAccent")}</span>{" "}
            {t("hero.titleEnd")}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full px-4 sm:px-0">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] text-base sm:text-lg px-8 sm:px-10 rounded-xl">
              <Link to="/multi-day-tours">
                {t("hero.exploreTours")}
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] text-base sm:text-lg px-8 sm:px-10 rounded-xl">
              <Link to="/day-trips">{t("hero.planJourney")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
