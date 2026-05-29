import { ArrowRight, User, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutTeaser = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-divine">
              Our Journey of Trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Started in 2015 by <span className="text-primary font-semibold">Mr. Lakpathi</span>, 
              KL Travels is not just a cab service — it's a commitment to safe, serene, and soulful travel. 
              With a decade of trust, we proudly serve families, pilgrims, and tourists looking for reliable 
              cab services with a personal touch.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Safe, serene, and soulful journeys</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Personal care with every ride</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Trusted by families and pilgrims</span>
              </div>
            </div>

            <Button size="lg" className="btn-divine" onClick={() => navigate("/about")}>
              Read More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            <div className="card-spiritual text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">2015</div>
              <div className="text-muted-foreground">Established</div>
            </div>
            <div className="card-spiritual text-center">
              <User className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div className="card-spiritual text-center sm:col-span-2">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-xl font-bold text-primary mb-2">LB Nagar, Hyderabad</div>
              <div className="text-muted-foreground">Base Location</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;