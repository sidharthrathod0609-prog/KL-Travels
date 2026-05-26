import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarTypes from "@/components/CarTypes";
import srisailamImg from "@/assets/srisailam.jpg";
import tirupatiImg from "@/assets/tirupati.jpg";
import pondicherryImg from "@/assets/pondicherry.jpg";
import goaImg from "@/assets/goa.jpg";
import hyderabadImg from "@/assets/hyderabad.jpg";

const Destinations = () => {
  const navigate = useNavigate();
  const destinations = [
    {
      id: "srisailam",
      name: "Srisailam Temple Tour",
      description: "Peaceful drive with spiritual comfort to the revered Jyotirlinga",
      image: srisailamImg,
      type: "Temple",
      duration: "Day Trip"
    },
    {
      id: "tirupati",
      name: "Tirupati Darshan",
      description: "Comfortable travel for divine blessings at Tirumala",
      image: tirupatiImg,
      type: "Temple",
      duration: "1-2 Days"
    },
    {
      id: "pondicherry",
      name: "Pondicherry Getaway",
      description: "Coastal beauty meets heritage in French India",
      image: pondicherryImg,
      type: "Coastal",
      duration: "2-3 Days"
    },
    {
      id: "goa",
      name: "Goa Leisure Trip",
      description: "For families & friends, with experienced drivers",
      image: goaImg,
      type: "Coastal",
      duration: "3-4 Days"
    },
    {
      id: "hyderabad",
      name: "Hyderabad Sightseeing",
      description: "Charminar, Ramoji, Birla, and more heritage spots",
      image: hyderabadImg,
      type: "City",
      duration: "Full Day"
    },
    {
      id: "yadagirigutta",
      name: "Yadagirigutta",
      description: "Sacred hilltop temple dedicated to Lord Narasimha",
      image: srisailamImg,
      type: "Temple",
      duration: "Day Trip"
    },
    {
      id: "arunachalam",
      name: "Arunachalam",
      description: "Holy mountain and ancient Shiva temple",
      image: tirupatiImg,
      type: "Temple",
      duration: "2 Days"
    },
    {
      id: "shirdi",
      name: "Shirdi",
      description: "Blessed land of Sai Baba's divine presence",
      image: srisailamImg,
      type: "Temple",
      duration: "2 Days"
    },
    {
      id: "varanasi",
      name: "Varanasi",
      description: "The spiritual capital of India on the sacred Ganges",
      image: tirupatiImg,
      type: "Temple",
      duration: "3-4 Days"
    },
    {
      id: "gokarna",
      name: "Gokarna",
      description: "Pristine beaches with spiritual significance",
      image: pondicherryImg,
      type: "Coastal",
      duration: "2-3 Days"
    }
  ];

  const handleWhatsApp = (destination: string) => {
    window.open(`https://wa.me/919908590094?text=Hi! I'd like to book a trip to ${destination}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-divine">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Sacred Destinations
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              From ancient temples to coastal retreats, explore divine destinations with our trusted cab services from Hyderabad
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-divine">Where Your Journey Takes You</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Carefully curated destinations for spiritual seekers, families, and travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="card-spiritual group hover-lift">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="badge-divine">{destination.type}</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {destination.duration}
                      </div>
                    </div>
                    <CardTitle className="text-divine">{destination.name}</CardTitle>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      <div className="flex gap-2 w-full">
                        <Button
                          variant="outline"
                          onClick={() => navigate(`/destinations/${destination.id}`)}
                          className="flex-1 btn-outline-divine text-xs sm:text-sm px-2"
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => handleWhatsApp(destination.name)}
                          className="btn-divine flex-1 text-xs sm:text-sm px-2"
                        >
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-1.5 hidden sm:inline" />
                        </Button>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        Pickup from anywhere in Hyderabad
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="card-spiritual max-w-2xl mx-auto p-8">
                <h3 className="text-2xl font-bold mb-4 text-divine">Custom Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Don't see your desired destination? We cover many more places across South India and beyond. Contact us for custom itineraries.
                </p>
                <Button
                  onClick={() => handleWhatsApp("custom destination")}
                  size="lg"
                  className="btn-divine"
                >
                  Plan Custom Trip
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Car Types Section */}
        <CarTypes />
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;