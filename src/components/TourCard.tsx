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
        <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group-hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full">
                {t("tours.from")} {price}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-serif font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                {location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                {duration}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2 text-accent" />
                {groupSize}
              </div>
            </div>

            <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
              {t("tours.viewDetails")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
