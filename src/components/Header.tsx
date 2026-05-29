import { useState } from "react";
import { Phone, MessageCircle, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const handleCall = () => {
    window.open("tel:+919908590094", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I'd like to book a cab", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center py-1">
            <img
              src="/logo.png"
              alt="KL Travels"
              className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 relative py-2 px-3 rounded-md ${isActive
                    ? "text-primary font-bold shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#f59e0b] animate-pulse" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button onClick={handleCall} variant="outline" size="sm" className="btn-outline-divine">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button onClick={handleWhatsApp} size="sm" className="btn-divine">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={handleCall} variant="secondary" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Book Ride
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/40 animate-fade-in-up">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-300 px-4 py-2.5 rounded-lg flex items-center justify-between ${isActive
                      ? "text-primary font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                      : "text-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <Button onClick={handleCall} variant="outline" className="btn-outline-divine w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button onClick={handleWhatsApp} className="btn-divine w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;