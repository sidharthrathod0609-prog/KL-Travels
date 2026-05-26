import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" }
  ];

  const handleCall = () => {
    window.open("tel:+919908590094", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I'd like to inquire about your services", "_blank");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🚗</div>
              <div>
                <h3 className="text-xl font-bold text-divine">KL Travels</h3>
                <p className="text-sm text-muted-foreground">Your Trusted Journey Begins Here</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Safe, spiritual, and trusted cab services from Hyderabad.
              Your journey, our devotion since 2015.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>LB Nagar, Hyderabad, Telangana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={handleCall}
              >
                <Phone className="w-4 h-4" />
                <span>+91 9908590094</span>
              </div>
              <div
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Important Notice</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Prices shared on request. No per-km rates shown online.</p>
              <p>All trips include drop + return with waiting time.</p>
              <p>Pre-booking recommended for better service.</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © 2026 KL Travels. Operating since 2015 • LB Nagar, Hyderabad
          </div>
          <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Mr. Lakpathi 9908590094
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;