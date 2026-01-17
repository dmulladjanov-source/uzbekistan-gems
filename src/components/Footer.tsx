import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const quickLinks = [
  { href: "/day-trips", label: "Day Trips" },
  { href: "/multi-day-tours", label: "Multi-day Tours" },
  { href: "/transfers", label: "Transfers" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const destinations = [
  "Samarkand",
  "Bukhara",
  "Khiva",
  "Tashkent",
  "Shahrisabz",
];

export function Footer() {
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
              Your trusted partner for authentic Uzbekistan travel experiences.
              Discover the magic of the Silk Road with our expert local guides.
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
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
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
            <h3 className="font-serif text-lg font-semibold mb-6">Destinations</h3>
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
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Tashkent, Uzbekistan
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
            © {new Date().getFullYear()} JamTrips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
