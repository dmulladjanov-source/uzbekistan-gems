import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ru")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
          language === "ru"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Переключить на русский"
      >
        RU
      </button>
    </div>
  );
}
