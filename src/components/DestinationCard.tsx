import { Link } from "react-router-dom";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

export function DestinationCard({ name, image, description, link }: DestinationCardProps) {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] block"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-1 sm:mb-2">
          {name}
        </h3>
        <p className="text-white/80 text-sm sm:text-base line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
