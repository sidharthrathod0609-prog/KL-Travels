import { CheckCircle, Car, Users, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Temple Tours & Pilgrimages",
      description: "Sacred journeys to holy destinations with spiritual comfort",
      features: [
        "Srisailam, Tirupati, Shirdi, Puri, Varanasi",
        "Respectful drivers understanding pilgrimage needs",
        "Comfortable travel for elderly and families",
        "Flexible darshan timing support"
      ]
    },
    {
      icon: Car,
      title: "Tourist & Coastal Trips",
      description: "Leisure travel to beautiful destinations for memorable experiences",
      features: [
        "Goa, Gokarna, Pondicherry coastal getaways",
        "Multi-day trip packages available",
        "Scenic route stops and photo opportunities",
        "Local cuisine and attraction recommendations"
      ]
    },
    {
      icon: Users,
      title: "City Sightseeing",
      description: "Explore Hyderabad's heritage and modern attractions",
      features: [
        "Charminar, Golconda Fort, Ramoji Film City",
        "Birla Mandir, Hussain Sagar, Shilparamam",
        "Half-day or full-day city tours",
        "Customizable itinerary based on interests"
      ]
    },
    {
      icon: Shield,
      title: "Airport Pickups & Returns",
      description: "Reliable airport transfers with punctual service",
      features: [
        "24/7 airport pickup and drop service",
        "Flight tracking for timely arrivals",
        "Clean, comfortable vehicles",
        "Professional and courteous drivers"
      ]
    },
    {
      icon: Clock,
      title: "Custom Itineraries",
      description: "Personalized travel packages designed for your needs",
      features: [
        "Family packages with child-friendly arrangements",
        "Senior-friendly comfortable travel options",
        "Corporate group transportation",
        "Multi-destination combined tours"
      ]
    }
  ];

  const fleetFeatures = [
    "Clean, Sanitized Vehicles",
    "Air Conditioning & Charging Points",
    "Experienced Driver-Owners",
    "Personal Care & Responsibility",
    "Safety Equipment & First Aid",
    "GPS Tracking & Route Planning"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I'd like to know more about your services", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-divine">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              Comprehensive cab services designed for spiritual journeys, family trips, and comfortable travel experiences
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-divine">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From sacred pilgrimages to leisure getaways, we provide reliable and comfortable transportation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-spiritual hover-lift animate-fade-in">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-divine">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet & Comfort */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6 text-divine">Fleet & Comfort</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our well-maintained vehicles and experienced driver-owners ensure your journey is safe, comfortable, and memorable.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {fleetFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="btn-divine" onClick={handleWhatsApp}>
                  Book Your Ride
                </Button>
              </div>

              <div className="card-spiritual p-8 animate-slide-in-right">
                <h3 className="text-2xl font-bold mb-6 text-divine">Driver-Cum-Owner Model</h3>
                <p className="text-muted-foreground mb-6">
                  Unlike regular cab services, our drivers are also the vehicle owners. This means they take personal care and responsibility for your safety and comfort throughout the journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground">Personal investment in vehicle maintenance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground">Better care and attention to passenger comfort</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground">Direct communication and accountability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Notice */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-spiritual max-w-4xl mx-auto p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-divine">Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every journey is unique — contact us for the best quote tailored to your specific needs, duration, and destination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">No Hidden Costs</h3>
                  <p className="text-sm text-muted-foreground">Transparent pricing with all charges included</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Custom Quotes</h3>
                  <p className="text-sm text-muted-foreground">Pricing based on your specific requirements</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Drop + Return</h3>
                  <p className="text-sm text-muted-foreground">All trips include waiting time and return journey</p>
                </div>
              </div>
              <Button size="lg" className="btn-divine" onClick={handleWhatsApp}>
                Get Your Quote
              </Button>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default Services;