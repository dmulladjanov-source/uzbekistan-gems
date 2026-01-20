import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

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
              {t("contactPage.badge")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              {t("contactPage.title")}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              {t("contactPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-10 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-serif font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{t("contactPage.location")}</h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">
                  {t("city.tashkent")}, Uzbekistan
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+998990152110"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors active:bg-primary-foreground/15"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-serif font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{t("contactPage.phone")}</h3>
                <span className="text-primary-foreground/70 text-xs sm:text-sm hover:text-accent transition-colors">
                  +998 99 015 21 10
                </span>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@jamtrips.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors active:bg-primary-foreground/15"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-serif font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{t("contactPage.email")}</h3>
                <span className="text-primary-foreground/70 text-xs sm:text-sm hover:text-accent transition-colors break-all">
                  info@jamtrips.com
                </span>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-serif font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{t("contactPage.hours")}</h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">
                  {t("contactPage.hoursValue")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Telegram CTA */}
      <section className="py-10 sm:py-12 md:py-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Send className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
              {t("contactPage.telegramTitle")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-2">
              {t("contactPage.telegramDesc")}
            </p>
            <a
              href="https://t.me/+998990152110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 active:scale-[0.98] transition-all shadow-soft min-h-[48px] text-sm sm:text-base"
            >
              <Send className="mr-2 h-5 w-5" />
              {t("contactPage.telegramBtn")}
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
