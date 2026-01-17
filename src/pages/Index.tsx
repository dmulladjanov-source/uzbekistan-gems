import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { TopTours } from "@/components/TopTours";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TopTours />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm variant="hero" />
    </Layout>
  );
};

export default Index;
