import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Heart, Award, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tourBukhara from "@/assets/tour-bukhara.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("about.value1.title"),
      description: t("about.value1.desc"),
    },
    {
      icon: Award,
      title: t("about.value2.title"),
      description: t("about.value2.desc"),
    },
    {
      icon: Users,
      title: t("about.value3.title"),
      description: t("about.value3.desc"),
    },
    {
      icon: Globe,
      title: t("about.value4.title"),
      description: t("about.value4.desc"),
    },
  ];

  const stats = [
    { number: "500+", label: t("about.stat1") },
    { number: "50+", label: t("about.stat2") },
    { number: "5", label: t("about.stat3") },
    { number: "100%", label: t("about.stat4") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-accent">
              {t("about.badge")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              {t("about.title")}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              {t("about.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={tourBukhara}
                alt="Beautiful Bukhara architecture"
                loading="lazy"
                className="rounded-xl shadow-elevated w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground">
                {t("about.storyTitle")}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("about.storyP1")}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("about.storyP2")}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("about.storyP3")}
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
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-4 sm:mb-6">
              {t("about.valuesTitle")}
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed px-2">
              {t("about.valuesDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
