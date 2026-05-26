import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularTrips from "@/components/PopularTrips";
import WhyChooseUs from "@/components/WhyChooseUs";
import CarTypes from "@/components/CarTypes";
import AboutTeaser from "@/components/AboutTeaser";
import QuoteSection from "@/components/QuoteSection";
import ReviewsTeaser from "@/components/ReviewsTeaser";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      <Hero />
      <PopularTrips />
      <WhyChooseUs />
      <CarTypes />
      <AboutTeaser />
      <QuoteSection />
      <ReviewsTeaser />
      <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
