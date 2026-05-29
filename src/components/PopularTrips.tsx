import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import srisailamImage from "@/assets/srisailam.jpg";
import tirupatiImage from "@/assets/tirupati.jpg";
import pondicherryImage from "@/assets/pondicherry.jpg";
import goaImage from "@/assets/goa.jpg";
import hyderabadImage from "@/assets/hyderabad.jpg";

const PopularTrips = () => {
  const navigate = useNavigate();
  const trips = [
    {
      id: "srisailam",
      icon: "🛕",
      title: "Srisailam Temple Tour",
      description: "Peaceful drive with spiritual comfort",
      image: srisailamImage,
      href: "/destinations/srisailam"
    },
    {
      id: "tirupati",
      icon: "🙏",
      title: "Tirupati Darshan",
      description: "Comfortable travel for divine blessings",
      image: tirupatiImage,
      href: "/destinations/tirupati"
    },
    {
      id: "pondicherry",
      icon: "🌸",
      title: "Pondicherry Getaway",
      description: "Coastal beauty meets heritage",
      image: pondicherryImage,
      href: "/destinations/pondicherry"
    },
    {
      id: "goa",
      icon: "🌊",
      title: "Goa Leisure Trip",
      description: "For families & friends, with experienced drivers",
      image: goaImage,
      href: "/destinations/goa"
    },
    {
      id: "hyderabad",
      icon: "🏙",
      title: "Hyderabad Sightseeing",
      description: "Charminar, Ramoji, Birla, and more...",
      image: hyderabadImage,
      href: "/destinations/hyderabad"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-divine">
            Popular Trips From Hyderabad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover spiritual destinations and scenic getaways with our trusted cab services
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              className="card-spiritual group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/destinations/${trip.id}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl bg-background/90 rounded-full w-12 h-12 flex items-center justify-center">
                  {trip.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground">
                  {trip.description}
                </p>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Destinations */}
        <div className="text-center mt-12">
          <Button size="lg" className="btn-divine" onClick={() => navigate("/destinations")}>
            View All Destinations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;