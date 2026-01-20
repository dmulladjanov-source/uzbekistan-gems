import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Clock, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t("why.localExpertise"),
      description: t("why.localExpertiseDesc"),
    },
    {
      icon: Shield,
      title: t("why.safeReliable"),
      description: t("why.safeReliableDesc"),
    },
    {
      icon: Users,
      title: t("why.privateTours"),
      description: t("why.privateToursDesc"),
    },
    {
      icon: Award,
      title: t("why.premiumQuality"),
      description: t("why.premiumQualityDesc"),
    },
    {
      icon: Clock,
      title: t("why.flexibleScheduling"),
      description: t("why.flexibleSchedulingDesc"),
    },
    {
      icon: Headphones,
      title: t("why.support"),
      description: t("why.supportDesc"),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-accent">
            {t("why.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
            {t("why.title")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
            {t("why.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-5 sm:p-6 md:p-8 rounded-xl bg-card hover:bg-secondary transition-colors duration-300 active:scale-[0.98]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
