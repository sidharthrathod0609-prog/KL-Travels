import { UserCheck, Shield, MapPin, RotateCcw, Heart, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Driver-Cum-Owner Model",
      description: "Personal care & responsibility"
    },
    {
      icon: Shield,
      title: "Clean, Sanitized Vehicles",
      description: "Your safety is our priority"
    },
    {
      icon: MapPin,
      title: "Pickup From Anywhere in Hyderabad",
      description: "Home, Hotel, or Airport"
    },
    {
      icon: RotateCcw,
      title: "Drop + Return Trips",
      description: "With waiting time included"
    },
    {
      icon: Heart,
      title: "Spiritual & Family Friendly",
      description: "Respectful drivers & peaceful journeys"
    },
    {
      icon: DollarSign,
      title: "No Price Surprises",
      description: "Contact for best fare deals"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-divine">
            Why Choose KL Travels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of traveling with a service that truly cares
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-spiritual text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mx-auto mb-6 w-16 h-16 rounded-full divine-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card border border-primary/20 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-background">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-background">
                T
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-background">
                G
              </div>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-primary">Trusted by 100+ families</span>
              <span className="text-muted-foreground ml-2">since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;