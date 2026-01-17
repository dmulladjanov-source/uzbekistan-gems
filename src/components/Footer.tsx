import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/day-trips", label: t("nav.dayTrips") },
    { href: "/multi-day-tours", label: t("nav.multiDayTours") },
    { href: "/transfers", label: t("nav.transfers") },
    { href: "/about", label: t("nav.about") },
    { href: "/reviews", label: t("nav.reviews") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const destinations = [
    t("city.samarkand"),
    t("city.bukhara"),
    t("city.khiva"),
    t("city.tashkent"),
    t("city.shahrisabz"),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif font-semibold">
                Jam<span className="text-accent">Trips</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://t.me/jamtrips"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">{t("footer.destinations")}</h3>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest}>
                  <span className="text-sm text-primary-foreground/80">
                    {dest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {t("city.tashkent")}, Uzbekistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+998901234567"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@jamtrips.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@jamtrips.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} JamTrips. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
