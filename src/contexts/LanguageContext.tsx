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
    "hero.planJourney": "City Tours",
    
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
    
    // Day Trips Page
    "dayTrips.badge": "One-Day Experiences",
    "dayTrips.title": "Day Trips",
    "dayTrips.description": "Perfect for travelers with limited time. Explore Uzbekistan's UNESCO World Heritage sites with our expertly guided day excursions.",
    "dayTrips.samarkand.title": "Samarkand: The Jewel of the Silk Road",
    "dayTrips.samarkand.duration": "Full Day (8-10 hours)",
    "dayTrips.bukhara.title": "Ancient Bukhara Walking Tour",
    "dayTrips.bukhara.duration": "Full Day (6-8 hours)",
    "dayTrips.khiva.title": "Khiva: The Museum City",
    "dayTrips.khiva.duration": "Full Day (5-7 hours)",
    "dayTrips.tashkent.title": "Tashkent City Discovery",
    "dayTrips.tashkent.duration": "Half Day (4-5 hours)",
    "dayTrips.shahrisabz.title": "Shahrisabz: Birthplace of Timur",
    "dayTrips.shahrisabz.duration": "Full Day (7-8 hours)",
    
    // Multi-Day Tours Page
    "multiDay.badge": "Immersive Journeys",
    "multiDay.title": "Multi-Day Tours",
    "multiDay.description": "Comprehensive itineraries that take you deep into Uzbekistan's culture, history, and breathtaking landscapes.",
    "multiDay.bookTour": "Book This Tour",
    "multiDay.classic.title": "Classic Silk Road Journey",
    "multiDay.classic.duration": "7 Days / 6 Nights",
    "multiDay.classic.h1": "UNESCO World Heritage Sites",
    "multiDay.classic.h2": "Expert local guides",
    "multiDay.classic.h3": "Comfortable 4-star hotels",
    "multiDay.classic.h4": "All transfers included",
    "multiDay.classic.h5": "Traditional cuisine experiences",
    "multiDay.golden.title": "Golden Triangle Tour",
    "multiDay.golden.duration": "5 Days / 4 Nights",
    "multiDay.golden.h1": "Three legendary cities",
    "multiDay.golden.h2": "High-speed train experience",
    "multiDay.golden.h3": "Local market visits",
    "multiDay.golden.h4": "Silk workshop tour",
    "multiDay.golden.h5": "Evening walking tours",
    "multiDay.complete.title": "Complete Uzbekistan Experience",
    "multiDay.complete.duration": "10 Days / 9 Nights",
    "multiDay.complete.h1": "Full country exploration",
    "multiDay.complete.h2": "Fergana Valley crafts",
    "multiDay.complete.h3": "Mountain landscapes",
    "multiDay.complete.h4": "Desert adventures",
    "multiDay.complete.h5": "Premium accommodations",
    
    // Transfers Page
    "transfers.badge": "Travel in Comfort",
    "transfers.title": "Private Transfers",
    "transfers.description": "Reliable, comfortable transportation across Uzbekistan. Modern vehicles, professional drivers, and door-to-door service.",
    "transfers.airport.title": "Airport Transfers",
    "transfers.airport.desc": "Seamless pickup and drop-off at all major Uzbekistan airports.",
    "transfers.airport.f1": "Meet & greet service",
    "transfers.airport.f2": "Flight tracking",
    "transfers.airport.f3": "24/7 availability",
    "transfers.city.title": "City-to-City Transfers",
    "transfers.city.desc": "Comfortable private transfers between Uzbekistan's legendary cities.",
    "transfers.city.f1": "Air-conditioned vehicles",
    "transfers.city.f2": "Professional drivers",
    "transfers.city.f3": "Flexible scheduling",
    "transfers.train.title": "Train Station Transfers",
    "transfers.train.desc": "Convenient connections to and from Uzbekistan's modern railway stations.",
    "transfers.train.f1": "Afrosiyob high-speed train connections",
    "transfers.train.f2": "Luggage assistance",
    "transfers.train.f3": "On-time guarantee",
    "transfers.afrosiyob.title": "Afrosiyob Train Tickets",
    "transfers.afrosiyob.desc": "We organize and book tickets for the high-speed Afrosiyob train on all routes across Uzbekistan.",
    "transfers.afrosiyob.f1": "Tashkent — Samarkand — Bukhara",
    "transfers.afrosiyob.f2": "Online booking assistance",
    "transfers.afrosiyob.f3": "Best available seats",
    "transfers.afrosiyob.f4": "Delivery to your hotel",
    "transfers.popular": "Popular Routes",
    "transfers.popularDesc": "Fixed prices, no hidden fees. All transfers include comfortable air-conditioned vehicles and English-speaking drivers.",
    "transfers.bookTransfer": "Book a Transfer",
    "transfers.safe": "Safe & Insured",
    "transfers.safeDesc": "All vehicles fully insured with experienced, licensed drivers.",
    "transfers.onTime": "On-Time Guarantee",
    "transfers.onTimeDesc": "Punctuality is our priority. We track flights and adjust accordingly.",
    "transfers.anyGroup": "Any Group Size",
    "transfers.anyGroupDesc": "From solo travelers to large groups, we have the right vehicle.",
    
    // About Page
    "about.badge": "Our Story",
    "about.title": "About JamTrips",
    "about.description": "Born from a love for Uzbekistan and a passion for sharing its wonders with the world.",
    "about.storyTitle": "Where Silk Road Dreams Come True",
    "about.storyP1": "JamTrips was founded by a team of passionate Uzbek travel professionals who grew up wandering the ancient streets of Samarkand and Bukhara. We understand that visiting Uzbekistan is more than just a trip – it's a journey through time.",
    "about.storyP2": "Our mission is simple: to share the real Uzbekistan with travelers from around the world. Not just the monuments and mosques, but the stories behind them. The warm hospitality of our people. The flavors of our cuisine. The artistry that has been passed down through generations.",
    "about.storyP3": "With years of experience and countless happy travelers, we've refined our approach to create journeys that are authentic, comfortable, and unforgettable.",
    "about.valuesTitle": "Our Values",
    "about.valuesDesc": "These principles guide everything we do, from planning your itinerary to welcoming you home.",
    "about.value1.title": "Passion for Our Heritage",
    "about.value1.desc": "We're not just guides – we're storytellers deeply connected to Uzbekistan's rich history and culture.",
    "about.value2.title": "Excellence in Service",
    "about.value2.desc": "Every detail matters. From accommodation to transportation, we ensure premium quality at every step.",
    "about.value3.title": "Personal Connections",
    "about.value3.desc": "We believe travel is about people. Our small group approach means meaningful interactions and lasting memories.",
    "about.value4.title": "Responsible Tourism",
    "about.value4.desc": "We work with local communities, support artisan traditions, and promote sustainable travel practices.",
    "about.stat1": "Happy Travelers",
    "about.stat2": "Unique Itineraries",
    "about.stat3": "Years of Experience",
    "about.stat4": "Satisfaction Rate",
    
    // Reviews Page
    "reviews.badge": "Guest Experiences",
    "reviews.title": "Reviews",
    "reviews.description": "Don't just take our word for it. Here's what travelers from around the world say about their JamTrips experience.",
    "reviews.basedOn": "Based on 150+ reviews",
    "reviews.exceptional": "Exceptional in every way",
    "reviews.exceptionalDesc": "Our guests consistently rate us 5 stars for service, knowledge, and overall experience.",
    
    // Contact Page
    "contactPage.badge": "Let's Connect",
    "contactPage.title": "Contact Us",
    "contactPage.description": "Ready to start planning your Uzbekistan adventure? We're here to help create your perfect journey.",
    "contactPage.location": "Location",
    "contactPage.phone": "Phone",
    "contactPage.email": "Email",
    "contactPage.hours": "Hours",
    "contactPage.hoursValue": "Mon-Sat: 9AM - 6PM (UTC+5)",
    "contactPage.telegramTitle": "Prefer Instant Messaging?",
    "contactPage.telegramDesc": "Reach us directly on Telegram for quick responses and real-time travel planning assistance.",
    "contactPage.telegramBtn": "Message Us on Telegram",
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
    "hero.planJourney": "Экскурсии по городам",
    
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
    
    // Day Trips Page
    "dayTrips.badge": "Однодневные экскурсии",
    "dayTrips.title": "Однодневные туры",
    "dayTrips.description": "Идеально для путешественников с ограниченным временем. Исследуйте объекты Всемирного наследия ЮНЕСКО в Узбекистане с нашими опытными гидами.",
    "dayTrips.samarkand.title": "Самарканд: Жемчужина Шёлкового пути",
    "dayTrips.samarkand.duration": "Полный день (8-10 часов)",
    "dayTrips.bukhara.title": "Однодневная экскурсия из Самарканда в Бухару и обратно на скоростных поездах.",
    "dayTrips.bukhara.duration": "Полный день (6-8 часов)",
    "dayTrips.khiva.title": "Хива: Город-музей",
    "dayTrips.khiva.duration": "Полный день (5-7 часов)",
    "dayTrips.tashkent.title": "Открытие Ташкента",
    "dayTrips.tashkent.duration": "Полдня (4-5 часов)",
    "dayTrips.shahrisabz.title": "Шахрисабз: Родина Тимура",
    "dayTrips.shahrisabz.duration": "Полный день (7-8 часов)",
    
    // Multi-Day Tours Page
    "multiDay.badge": "Погружение в культуру",
    "multiDay.title": "Многодневные туры",
    "multiDay.description": "Комплексные маршруты, которые погружают вас в культуру, историю и захватывающие пейзажи Узбекистана.",
    "multiDay.bookTour": "Забронировать тур",
    "multiDay.classic.title": "Классическое путешествие по Шёлковому пути",
    "multiDay.classic.duration": "7 дней / 6 ночей",
    "multiDay.classic.h1": "Объекты Всемирного наследия ЮНЕСКО",
    "multiDay.classic.h2": "Опытные местные гиды",
    "multiDay.classic.h3": "Комфортные 4-звёздочные отели",
    "multiDay.classic.h4": "Все трансферы включены",
    "multiDay.classic.h5": "Традиционная кухня",
    "multiDay.golden.title": "Тур Золотой треугольник",
    "multiDay.golden.duration": "5 дней / 4 ночи",
    "multiDay.golden.h1": "Три легендарных города",
    "multiDay.golden.h2": "Поездка на скоростном поезде",
    "multiDay.golden.h3": "Посещение местных рынков",
    "multiDay.golden.h4": "Экскурсия на шёлковую фабрику",
    "multiDay.golden.h5": "Вечерние прогулки",
    "multiDay.complete.title": "Полное погружение в Узбекистан",
    "multiDay.complete.duration": "10 дней / 9 ночей",
    "multiDay.complete.h1": "Полное исследование страны",
    "multiDay.complete.h2": "Ремёсла Ферганской долины",
    "multiDay.complete.h3": "Горные пейзажи",
    "multiDay.complete.h4": "Приключения в пустыне",
    "multiDay.complete.h5": "Премиум-размещение",
    
    // Transfers Page
    "transfers.badge": "Путешествуйте с комфортом",
    "transfers.title": "Частные трансферы",
    "transfers.description": "Надёжный, комфортный транспорт по всему Узбекистану. Современные автомобили, профессиональные водители и сервис от двери до двери.",
    "transfers.airport.title": "Трансферы из аэропорта",
    "transfers.airport.desc": "Удобная встреча и доставка во всех крупных аэропортах Узбекистана.",
    "transfers.airport.f1": "Встреча с табличкой",
    "transfers.airport.f2": "Отслеживание рейсов",
    "transfers.airport.f3": "Доступность 24/7",
    "transfers.city.title": "Междугородние трансферы",
    "transfers.city.desc": "Комфортные частные трансферы между легендарными городами Узбекистана.",
    "transfers.city.f1": "Автомобили с кондиционером",
    "transfers.city.f2": "Профессиональные водители",
    "transfers.city.f3": "Гибкий график",
    "transfers.train.title": "Трансферы с ж/д вокзала",
    "transfers.train.desc": "Удобные подключения к современным железнодорожным станциям Узбекистана.",
    "transfers.train.f1": "Подключение к скоростному поезду Афросиаб",
    "transfers.train.f2": "Помощь с багажом",
    "transfers.train.f3": "Гарантия пунктуальности",
    "transfers.afrosiyob.title": "Билеты на Афросиаб",
    "transfers.afrosiyob.desc": "Организация и покупка билетов на скоростной поезд «Афросиаб» по всем направлениям Узбекистана.",
    "transfers.afrosiyob.f1": "Ташкент — Самарканд — Бухара",
    "transfers.afrosiyob.f2": "Помощь с онлайн-бронированием",
    "transfers.afrosiyob.f3": "Лучшие доступные места",
    "transfers.afrosiyob.f4": "Доставка в отель",
    "transfers.popular": "Популярные маршруты",
    "transfers.popularDesc": "Фиксированные цены, без скрытых платежей. Все трансферы включают комфортные автомобили с кондиционером и англоговорящих водителей.",
    "transfers.bookTransfer": "Забронировать трансфер",
    "transfers.safe": "Безопасность и страховка",
    "transfers.safeDesc": "Все автомобили полностью застрахованы с опытными лицензированными водителями.",
    "transfers.onTime": "Гарантия пунктуальности",
    "transfers.onTimeDesc": "Пунктуальность — наш приоритет. Мы отслеживаем рейсы и корректируем время.",
    "transfers.anyGroup": "Любой размер группы",
    "transfers.anyGroupDesc": "От индивидуальных путешественников до больших групп — у нас есть подходящий автомобиль.",
    
    // About Page
    "about.badge": "Наша история",
    "about.title": "О JamTrips",
    "about.description": "Рождён из любви к Узбекистану и страсти делиться его чудесами с миром.",
    "about.storyTitle": "Где мечты о Шёлковом пути становятся реальностью",
    "about.storyP1": "JamTrips основана командой увлечённых узбекских специалистов по туризму, выросших на древних улицах Самарканда и Бухары. Мы понимаем, что посещение Узбекистана — это больше, чем просто поездка, это путешествие сквозь время.",
    "about.storyP2": "Наша миссия проста: поделиться настоящим Узбекистаном с путешественниками со всего мира. Не только памятниками и мечетями, но и историями за ними. Тёплым гостеприимством нашего народа. Вкусами нашей кухни. Мастерством, передающимся из поколения в поколение.",
    "about.storyP3": "За годы опыта и бесчисленное количество довольных путешественников мы усовершенствовали наш подход, создавая путешествия, которые аутентичны, комфортны и незабываемы.",
    "about.valuesTitle": "Наши ценности",
    "about.valuesDesc": "Эти принципы направляют всё, что мы делаем, от планирования маршрута до встречи вас дома.",
    "about.value1.title": "Страсть к наследию",
    "about.value1.desc": "Мы не просто гиды — мы рассказчики, глубоко связанные с богатой историей и культурой Узбекистана.",
    "about.value2.title": "Превосходство в сервисе",
    "about.value2.desc": "Каждая деталь важна. От размещения до транспорта — мы обеспечиваем премиум-качество на каждом шагу.",
    "about.value3.title": "Личные связи",
    "about.value3.desc": "Мы верим, что путешествие — это люди. Наш подход малых групп означает значимые взаимодействия и незабываемые воспоминания.",
    "about.value4.title": "Ответственный туризм",
    "about.value4.desc": "Мы работаем с местными сообществами, поддерживаем ремесленные традиции и продвигаем устойчивый туризм.",
    "about.stat1": "Довольных путешественников",
    "about.stat2": "Уникальных маршрутов",
    "about.stat3": "Лет опыта",
    "about.stat4": "Уровень удовлетворённости",
    
    // Reviews Page
    "reviews.badge": "Впечатления гостей",
    "reviews.title": "Отзывы",
    "reviews.description": "Не верьте нам на слово. Вот что говорят путешественники со всего мира о своём опыте с JamTrips.",
    "reviews.basedOn": "На основе 150+ отзывов",
    "reviews.exceptional": "Исключительны во всём",
    "reviews.exceptionalDesc": "Наши гости стабильно ставят нам 5 звёзд за сервис, знания и общее впечатление.",
    
    // Contact Page
    "contactPage.badge": "Свяжитесь с нами",
    "contactPage.title": "Контакты",
    "contactPage.description": "Готовы начать планировать своё приключение в Узбекистане? Мы поможем создать идеальное путешествие.",
    "contactPage.location": "Местоположение",
    "contactPage.phone": "Телефон",
    "contactPage.email": "Email",
    "contactPage.hours": "Часы работы",
    "contactPage.hoursValue": "Пн-Сб: 9:00 - 18:00 (UTC+5)",
    "contactPage.telegramTitle": "Предпочитаете мессенджер?",
    "contactPage.telegramDesc": "Свяжитесь с нами напрямую в Telegram для быстрых ответов и помощи в планировании путешествия.",
    "contactPage.telegramBtn": "Написать в Telegram",
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
