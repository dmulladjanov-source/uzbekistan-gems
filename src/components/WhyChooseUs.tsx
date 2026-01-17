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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-accent">
            {t("why.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            {t("why.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("why.description")}
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
