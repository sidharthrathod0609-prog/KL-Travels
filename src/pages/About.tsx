import { ArrowRight, Calendar, MapPin, Heart, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Devotion",
      description: "We approach every journey with the same reverence as a spiritual pilgrimage"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and comfort are our primary concerns in every trip"
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Special attention to families, elderly passengers, and children's needs"
    },
    {
      icon: Award,
      title: "Punctuality",
      description: "Reliable service with respect for your time and schedule"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description: "Started by Mr. Lakpathi with a vision for spiritual and safe travel"
    },
    {
      year: "2018",
      title: "Fleet Expansion",
      description: "Added more comfortable vehicles to serve growing customer base"
    },
    {
      year: "2020",
      title: "Safety Standards",
      description: "Enhanced safety protocols and sanitization measures"
    },
    {
      year: "2024",
      title: "Digital Presence",
      description: "Launched modern booking platform for better customer experience"
    },
    {
      year: "2026",
      title: "Sacred Fleet Upgrade",
      description: "Expanded our fleet with premium electric and customized hybrid vehicles tailored for silent, peaceful, and eco-friendly pilgrimage tours"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I'd like to plan a trip with KL Travels", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-divine">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              A decade of trust, devotion, and safe journeys from the heart of Hyderabad
            </p>
          </div>
        </section>

        {/* Main Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6 text-divine">The Journey Begins</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    In 2015, <span className="text-primary font-semibold">Mr. Lakpathi</span> started KL Travels with a simple yet profound vision: to provide safe, serene, and soulful travel experiences for families and spiritual seekers.
                  </p>
                  <p>
                    What began as a small cab service in LB Nagar, Hyderabad, has grown into a trusted name for pilgrimage tours, family trips, and comfortable transportation across South India.
                  </p>
                  <p>
                    Our driver-cum-owner model ensures that every journey receives personal attention and care, making your travel experience not just a ride, but a memorable part of your journey.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
                <Card className="card-spiritual text-center">
                  <CardContent className="pt-6">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">2015</div>
                    <div className="text-muted-foreground">Established</div>
                  </CardContent>
                </Card>
                <Card className="card-spiritual text-center">
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Happy Families</div>
                  </CardContent>
                </Card>
                <Card className="card-spiritual text-center sm:col-span-2">
                  <CardContent className="pt-6">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-xl font-bold text-primary mb-2">LB Nagar, Hyderabad</div>
                    <div className="text-muted-foreground">Home Base</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="card-spiritual max-w-4xl mx-auto p-8 text-center mb-20">
              <h2 className="text-3xl font-bold mb-6 text-divine">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide safe, serene, and soulful travel experiences that turn every journey into a blessed memory. We believe that the path to your destination should be as meaningful as the destination itself.
              </p>
              <div className="text-primary font-semibold">
                "Your journey, our devotion"
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-divine">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every journey and interaction with our valued customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-spiritual text-center hover-lift animate-fade-in">
                  <CardHeader>
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-divine">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-divine">Our Journey Timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our growth and commitment to better service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="card-spiritual hover-lift animate-fade-in">
                  <CardHeader>
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <CardTitle className="text-divine">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{milestone.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-spiritual max-w-4xl mx-auto p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-divine">Service Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                From our base in LB Nagar, Hyderabad, we serve destinations across South India and beyond, specializing in spiritual and family-friendly travel.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Temple Tours</h3>
                  <p className="text-sm text-muted-foreground">Srisailam, Tirupati, Shirdi, Varanasi, and more sacred destinations</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Coastal Getaways</h3>
                  <p className="text-sm text-muted-foreground">Goa, Pondicherry, Gokarna for leisure and family trips</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">City Tours</h3>
                  <p className="text-sm text-muted-foreground">Complete Hyderabad sightseeing and nearby attractions</p>
                </div>
              </div>

              <Button size="lg" className="btn-divine" onClick={handleWhatsApp}>
                Plan Your Trip
                <ArrowRight className="w-5 h-5 ml-2" />
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

export default About;