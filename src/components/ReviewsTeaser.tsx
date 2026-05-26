import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { parseReviewDate } from "@/lib/security";

const ReviewsTeaser = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      name: "Anitha R.",
      location: "Hyderabad",
      trip: "Srisailam Temple Tour",
      comment: "From booking on WhatsApp to returning home, everything was so smooth. Our driver was also the owner, and you could feel the personal care. The car was clean, the AC was perfect, and he even guided us about the best darshan timings. Highly recommended for families!",
      date: "12 July 2025"
    },
    {
      id: 2,
      rating: 5,
      name: "Suresh & Kavitha",
      location: "Vijayawada",
      trip: "Pondicherry Getaway",
      comment: "We booked KL Travels for a 3-day trip to Pondicherry. The ride was comfortable, and the driver-owner made sure we had water bottles and even suggested great places to eat. Felt like traveling with a family friend. Will book again for Goa next time!",
      date: "03 August 2025"
    },
    {
      id: 3,
      rating: 5,
      name: "Rajesh",
      location: "Hyderabad",
      trip: "Tirupati Darshan",
      comment: "Punctual pickup from my home in LB Nagar, smooth drive, and a driver who understood the importance of darshan timing. We reached on time and returned comfortably without any rush. Truly a spiritual journey with peace of mind.",
      date: "20 June 2025"
    },
    {
      id: 4,
      rating: 4,
      name: "Meena Sharma",
      location: "Secunderabad",
      trip: "Hyderabad Sightseeing",
      comment: "Had guests from Delhi and booked KL Travels for a full day Hyderabad city tour. The driver-owner was polite, patient, and knew all the right spots. We loved the Charminar stop and Golconda sunset view. One star less only because of city traffic — not their fault!",
      date: "28 May 2025"
    },
    {
      id: 5,
      rating: 5,
      name: "K. Sidharth",
      location: "Hyderabad",
      trip: "Yadagirigutta Devotional Trip",
      comment: "Superb travel experience with family! The driver-owner was extremely polite and arrived 10 minutes early. The vehicle was pristine, and he helped us park right near the temple entrance. Will definitely use their service for all our temple trips.",
      date: "14 January 2026"
    },
    {
      id: 6,
      rating: 5,
      name: "Lakshmi Prasanna",
      location: "Secunderabad",
      trip: "Arunachalam Girivalam Tour",
      comment: "A highly spiritual and peaceful journey. We felt secure throughout the night drive. The vehicle was very comfortable with great suspension, making the long trip feel effortless. Highly recommend KL Travels for spiritual tours.",
      date: "18 April 2026"
    }
  ];

  const sortedReviews = [...reviews].sort((a, b) => parseReviewDate(b.date).getTime() - parseReviewDate(a.date).getTime());

  const averageRating = 4.9;
  const totalReviews = 150;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-divine">
            Blessed Journeys, Happy Hearts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See what our spiritual travelers and families say about their experiences with KL Travels
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-bold text-divine">{averageRating}</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-muted-foreground">
              <span className="font-semibold">{totalReviews}+ reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sortedReviews.map((review, index) => (
            <Card
              key={review.id}
              className="card-spiritual group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>

                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {review.trip}
                  </Badge>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute top-0 left-0 w-4 h-4 text-primary/40 -translate-x-1 -translate-y-1" />
                  <p className="text-foreground italic pl-4 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="text-xs text-muted-foreground">
                  {review.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-spiritual max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 text-divine">Share Your Journey</h3>
            <p className="text-muted-foreground mb-6">
              Help other families choose confidently by sharing your experience with KL Travels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-divine" onClick={() => window.location.href = "/reviews"}>
                Read All Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/reviews#write-review"}>
                Write a Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsTeaser;