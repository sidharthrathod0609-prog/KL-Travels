import { Users, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import sedanCar from "@/assets/sedan-car.jpg";
import suvCar from "@/assets/suv-car.jpg";
import hatchbackCar from "@/assets/hatchback-car.jpg";
import tempoCar from "@/assets/tempo-car.jpg";
import minibusCar from "@/assets/minibus-car.jpg";

const CarTypes = () => {
  const carTypes = [
    {
      name: "Sedan",
      image: sedanCar,
      capacity: "4 Passengers",
      luggage: "2-3 Bags",
      description: "Comfortable AC sedans perfect for city trips and short journeys",
      features: ["AC", "Music System", "Comfortable Seating"],
      bestFor: "Couples, Small families",
      examples: "Swift Dzire, Honda Amaze, Toyota Etios"
    },
    {
      name: "SUV",
      image: suvCar,
      capacity: "6-7 Passengers", 
      luggage: "4-5 Bags",
      description: "Spacious SUVs ideal for families and longer road trips",
      features: ["AC", "Extra Space", "Higher Ground Clearance"],
      bestFor: "Families, Group trips",
      examples: "Innova, Crysta, Ertiga, Scorpio"
    },
    {
      name: "Hatchback",
      image: hatchbackCar,
      capacity: "4 Passengers",
      luggage: "2 Bags", 
      description: "Compact and economical for city sightseeing and short trips",
      features: ["AC", "Fuel Efficient", "Easy Parking"],
      bestFor: "Budget travelers, City tours",
      examples: "Swift, i20, Baleno"
    },
    {
      name: "Tempo Traveller",
      image: tempoCar,
      capacity: "12-14 Passengers",
      luggage: "8-10 Bags",
      description: "Large vehicles perfect for group pilgrimages and family gatherings",
      features: ["AC", "Push Back Seats", "Ample Luggage Space"],
      bestFor: "Large groups, Extended families",
      examples: "Force Traveller, Mahindra Bolero Camper"
    },
    {
      name: "Mini Bus",
      image: minibusCar,
      capacity: "20-25 Passengers",
      luggage: "15+ Bags",
      description: "Luxury buses for large group tours and corporate trips",
      features: ["AC", "Comfortable Seating", "Entertainment System"],
      bestFor: "Corporate groups, Large family reunions",
      examples: "Tata LP 909, Ashok Leyland"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-divine">Our Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of well-maintained vehicles for every journey need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {carTypes.map((car, index) => {
            return (
              <Card key={index} className="card-spiritual hover-lift group flex flex-col justify-between p-0">
                <CardHeader className="p-2 sm:p-6 pb-1 sm:pb-6">
                  <div className="relative h-24 xs:h-28 sm:h-48 mb-2 sm:mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="badge-divine absolute top-1.5 right-1.5 text-[8px] sm:text-xs px-1 sm:px-2.5 py-0.5 truncate max-w-[80%]">{car.bestFor}</Badge>
                  </div>
                  <CardTitle className="text-sm xs:text-base sm:text-2xl font-bold text-divine line-clamp-1">{car.name}</CardTitle>
                  <CardDescription className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem] sm:min-h-0">{car.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-2 sm:p-6 pt-0 sm:pt-0 space-y-2 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
                    <div className="text-center p-1.5 sm:p-3 bg-secondary/20 rounded-lg">
                      <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-primary" />
                      <div className="text-[9px] xs:text-xs sm:text-sm font-medium">{car.capacity}</div>
                    </div>
                    <div className="text-center p-1.5 sm:p-3 bg-secondary/20 rounded-lg">
                      <Package className="w-3.5 h-3.5 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-primary" />
                      <div className="text-[9px] xs:text-xs sm:text-sm font-medium">{car.luggage}</div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block">
                    <h5 className="font-medium text-foreground mb-2">Features:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {car.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="hidden sm:block">
                    <h5 className="font-medium text-foreground mb-1">Examples:</h5>
                    <p className="text-sm text-muted-foreground">{car.examples}</p>
                  </div>
                  <div className="pt-2 sm:pt-4 border-t border-border/50">
                    <Button 
                      onClick={() => window.open("tel:+919908590094", "_self")} 
                      className="w-full btn-divine h-8 sm:h-10 text-[10px] sm:text-sm px-2 sm:px-4"
                    >
                      Book Ride
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="card-spiritual max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 text-divine">All Vehicles Include</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">AC</span>
                </div>
                <span className="text-sm text-muted-foreground">Air Conditioning</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">🛡️</span>
                </div>
                <span className="text-sm text-muted-foreground">Insurance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">🧽</span>
                </div>
                <span className="text-sm text-muted-foreground">Clean & Sanitized</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">👨‍✈️</span>
                </div>
                <span className="text-sm text-muted-foreground">Expert Driver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarTypes;