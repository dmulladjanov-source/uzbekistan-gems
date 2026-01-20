import { motion } from "framer-motion";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  href: string;
  index?: number;
}

export function TourCard({
  image,
  title,
  location,
  duration,
  groupSize,
  price,
  href,
  index = 0,
}: TourCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={href} className="block">
        <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group-hover:-translate-y-1 active:scale-[0.98]">
          {/* Image */}
          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
              <span className="inline-block px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full">
                {t("tours.from")} {price}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6">
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-card-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>

            <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <span className="truncate">{location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <span className="truncate">{duration}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                <span className="truncate">{groupSize}</span>
              </div>
            </div>

            <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors min-h-[44px] -mb-2">
              {t("tours.viewDetails")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
