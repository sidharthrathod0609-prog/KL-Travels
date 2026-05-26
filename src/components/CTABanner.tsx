import { Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const handleCall = () => {
    window.open("tel:+919908590094", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I need a quote for my trip", "_blank");
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 divine-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="card-spiritual text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-divine mb-4">
              Contact us now for your personalized quote
            </h2>
            <div className="flex items-center justify-center space-x-2 text-xl text-primary font-semibold mb-2">
              <Phone className="w-5 h-5" />
              <span>Phone & WhatsApp: +91 9908590094</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Available 24/7 – Pre-book your next journey today!</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={handleCall}
              size="lg" 
              className="btn-outline-divine px-8 py-4 h-auto"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="btn-divine px-8 py-4 h-auto"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Quote
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              ✨ <span className="text-primary font-medium">Quick Response Guarantee</span> - 
              We reply within 30 minutes during business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;