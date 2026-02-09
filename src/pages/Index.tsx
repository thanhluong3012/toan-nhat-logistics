import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ThankYouSection from "@/components/ThankYouSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <ThankYouSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
