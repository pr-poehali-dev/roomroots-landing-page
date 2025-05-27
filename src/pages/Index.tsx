import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductGallery from "@/components/ProductGallery";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductGallery />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
