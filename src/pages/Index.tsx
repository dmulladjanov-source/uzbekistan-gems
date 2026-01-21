import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { Destinations } from "@/components/Destinations";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm variant="hero" />
      <FloatingButtons />
    </Layout>
  );
};

export default Index;
