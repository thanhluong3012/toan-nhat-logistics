import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <ThankYouSection />
      <Footer />
    </div>
  );
};

export default Index;
