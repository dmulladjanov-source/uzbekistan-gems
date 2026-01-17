import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
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
              Let's Connect
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to start planning your Uzbekistan adventure? We're here to 
              help create your perfect journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-1">Location</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Tashkent, Uzbekistan
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+998901234567"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  +998 90 123 45 67
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@jamtrips.com"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  info@jamtrips.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-semibold mb-1">Hours</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Mon-Sat: 9AM - 6PM (UTC+5)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Telegram CTA */}
      <section className="py-16 bg-sand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
              Prefer Instant Messaging?
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach us directly on Telegram for quick responses and real-time 
              travel planning assistance.
            </p>
            <a
              href="https://t.me/jamtrips"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-soft"
            >
              <Send className="mr-2 h-5 w-5" />
              Message Us on Telegram
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
