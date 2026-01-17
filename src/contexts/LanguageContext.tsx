import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.dayTrips": "Day Trips",
    "nav.multiDayTours": "Multi-day Tours",
    "nav.transfers": "Transfers",
    "nav.about": "About Us",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",
    
    // Hero
    "hero.badge": "Private Tours in Uzbekistan",
    "hero.title": "Discover the Ancient",
    "hero.titleAccent": "Heart",
    "hero.titleEnd": "of the Silk Road",
    "hero.description": "Experience the timeless beauty of Uzbekistan with personalized, premium tours crafted by local experts. From Samarkand's majestic architecture to Bukhara's ancient streets.",
    "hero.exploreTours": "Explore Tours",
    "hero.planJourney": "Plan Your Journey",
    
    // Top Tours
    "tours.badge": "Popular Experiences",
    "tours.title": "Our Top Tours",
    "tours.description": "Handcrafted itineraries designed to immerse you in Uzbekistan's rich history, stunning architecture, and warm hospitality.",
    "tours.viewDetails": "View Details",
    "tours.from": "From",
    "tours.privateTour": "Private Tour",
    
    // Why Choose Us
    "why.badge": "The JamTrips Difference",
    "why.title": "Why Choose Us",
    "why.description": "We don't just show you Uzbekistan – we help you feel it. Every journey is crafted with passion and attention to detail.",
    "why.localExpertise": "Local Expertise",
    "why.localExpertiseDesc": "Our guides are born and raised in Uzbekistan, offering authentic insights and hidden gems.",
    "why.safeReliable": "Safe & Reliable",
    "why.safeReliableDesc": "Licensed operators with a perfect safety record and comprehensive travel insurance.",
    "why.privateTours": "Private Tours",
    "why.privateToursDesc": "Personalized experiences tailored to your interests, pace, and travel style.",
    "why.premiumQuality": "Premium Quality",
    "why.premiumQualityDesc": "Handpicked hotels, comfortable vehicles, and exceptional service standards.",
    "why.flexibleScheduling": "Flexible Scheduling",
    "why.flexibleSchedulingDesc": "Tours that adapt to your timeline. Early morning, evening, or custom timings.",
    "why.support": "24/7 Support",
    "why.supportDesc": "Round-the-clock assistance throughout your journey in Uzbekistan.",
    
    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our Guests Say",
    "testimonials.description": "Join hundreds of satisfied travelers who discovered Uzbekistan with JamTrips.",
    
    // Contact Form
    "contact.badge": "Start Your Journey",
    "contact.title": "Get in Touch",
    "contact.description": "Ready to explore Uzbekistan? Send us a message and we'll help craft your perfect itinerary.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number (optional)",
    "contact.message": "Your Message",
    "contact.messagePlaceholder": "Tell us about your travel plans, preferred dates, group size...",
    "contact.send": "Send via Telegram",
    "contact.success": "Thank you! We'll respond within 24 hours.",
    "contact.telegramDirect": "Or contact us directly on",
    
    // Footer
    "footer.description": "Your trusted partner for authentic Uzbekistan travel experiences. Discover the magic of the Silk Road with our expert local guides.",
    "footer.quickLinks": "Quick Links",
    "footer.destinations": "Destinations",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
    
    // Cities
    "city.samarkand": "Samarkand",
    "city.bukhara": "Bukhara",
    "city.khiva": "Khiva",
    "city.tashkent": "Tashkent",
    "city.shahrisabz": "Shahrisabz",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.dayTrips": "Однодневные туры",
    "nav.multiDayTours": "Многодневные туры",
    "nav.transfers": "Трансферы",
    "nav.about": "О нас",
    "nav.reviews": "Отзывы",
    "nav.contact": "Контакты",
    "nav.bookNow": "Забронировать",
    
    // Hero
    "hero.badge": "Частные туры по Узбекистану",
    "hero.title": "Откройте древнее",
    "hero.titleAccent": "Сердце",
    "hero.titleEnd": "Шёлкового пути",
    "hero.description": "Испытайте вечную красоту Узбекистана с персонализированными премиальными турами от местных экспертов. От величественной архитектуры Самарканда до древних улиц Бухары.",
    "hero.exploreTours": "Смотреть туры",
    "hero.planJourney": "Спланировать поездку",
    
    // Top Tours
    "tours.badge": "Популярные туры",
    "tours.title": "Лучшие туры",
    "tours.description": "Тщательно продуманные маршруты, погружающие вас в богатую историю, потрясающую архитектуру и тёплое гостеприимство Узбекистана.",
    "tours.viewDetails": "Подробнее",
    "tours.from": "От",
    "tours.privateTour": "Частный тур",
    
    // Why Choose Us
    "why.badge": "Преимущества JamTrips",
    "why.title": "Почему мы",
    "why.description": "Мы не просто показываем Узбекистан – мы помогаем вам его почувствовать. Каждое путешествие создано с любовью и вниманием к деталям.",
    "why.localExpertise": "Местная экспертиза",
    "why.localExpertiseDesc": "Наши гиды родились и выросли в Узбекистане, предлагая подлинные знания и скрытые жемчужины.",
    "why.safeReliable": "Безопасность",
    "why.safeReliableDesc": "Лицензированные операторы с безупречной репутацией и полным страхованием.",
    "why.privateTours": "Частные туры",
    "why.privateToursDesc": "Персонализированный опыт, адаптированный к вашим интересам и стилю путешествия.",
    "why.premiumQuality": "Премиум качество",
    "why.premiumQualityDesc": "Отобранные отели, комфортные автомобили и исключительный сервис.",
    "why.flexibleScheduling": "Гибкий график",
    "why.flexibleSchedulingDesc": "Туры, которые адаптируются к вашему расписанию. Утром, вечером или по индивидуальному графику.",
    "why.support": "Поддержка 24/7",
    "why.supportDesc": "Круглосуточная помощь на протяжении всего путешествия по Узбекистану.",
    
    // Testimonials
    "testimonials.badge": "Отзывы",
    "testimonials.title": "Что говорят наши гости",
    "testimonials.description": "Присоединяйтесь к сотням довольных путешественников, открывших Узбекистан с JamTrips.",
    
    // Contact Form
    "contact.badge": "Начните путешествие",
    "contact.title": "Свяжитесь с нами",
    "contact.description": "Готовы исследовать Узбекистан? Напишите нам, и мы поможем составить идеальный маршрут.",
    "contact.name": "Ваше имя",
    "contact.email": "Email",
    "contact.phone": "Телефон (необязательно)",
    "contact.message": "Сообщение",
    "contact.messagePlaceholder": "Расскажите о ваших планах, предпочтительных датах, размере группы...",
    "contact.send": "Отправить в Telegram",
    "contact.success": "Спасибо! Мы ответим в течение 24 часов.",
    "contact.telegramDirect": "Или напишите нам напрямую в",
    
    // Footer
    "footer.description": "Ваш надёжный партнёр для аутентичных путешествий по Узбекистану. Откройте магию Шёлкового пути с нашими опытными гидами.",
    "footer.quickLinks": "Быстрые ссылки",
    "footer.destinations": "Направления",
    "footer.contactUs": "Контакты",
    "footer.rights": "Все права защищены.",
    
    // Cities
    "city.samarkand": "Самарканд",
    "city.bukhara": "Бухара",
    "city.khiva": "Хива",
    "city.tashkent": "Ташкент",
    "city.shahrisabz": "Шахрисабз",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("jamtrips-lang");
    return (saved as Language) || "en";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("jamtrips-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
