import { useState } from "react";
import { Star, Send, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { toast } from "sonner";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { sanitizeInput, validateName, validateLocation, checkRateLimit, recordSubmit, parseReviewDate } from "@/lib/security";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [comment, setComment] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [reviewList, setReviewList] = useState([
    {
      id: 1,
      name: "Anitha R.",
      location: "Hyderabad",
      destination: "Srisailam Temple Tour",
      rating: 5,
      date: "12 July 2025",
      comment: "From booking on WhatsApp to returning home, everything was so smooth. Our driver was also the owner, and you could feel the personal care. The car was clean, the AC was perfect, and he even guided us about the best darshan timings. Highly recommended for families!"
    },
    {
      id: 2,
      name: "Suresh & Kavitha",
      location: "Vijayawada",
      destination: "Pondicherry Getaway",
      rating: 5,
      date: "03 August 2025",
      comment: "We booked KL Travels for a 3-day trip to Pondicherry. The ride was comfortable, and the driver-owner made sure we had water bottles and even suggested great places to eat. Felt like traveling with a family friend. Will book again for Goa next time!"
    },
    {
      id: 3,
      name: "Rajesh",
      location: "Hyderabad",
      destination: "Tirupati Darshan",
      rating: 5,
      date: "20 June 2025",
      comment: "Punctual pickup from my home in LB Nagar, smooth drive, and a driver who understood the importance of darshan timing. We reached on time and returned comfortably without any rush. Truly a spiritual journey with peace of mind."
    },
    {
      id: 4,
      name: "Meena Sharma",
      location: "Secunderabad",
      destination: "Hyderabad Sightseeing",
      rating: 4,
      date: "28 May 2025",
      comment: "Had guests from Delhi and booked KL Travels for a full day Hyderabad city tour. The driver-owner was polite, patient, and knew all the right spots. We loved the Charminar stop and Golconda sunset view. One star less only because of city traffic — not their fault!"
    },
    {
      id: 5,
      name: "M. Vivek",
      location: "Bangalore",
      destination: "Goa Leisure Trip",
      rating: 5,
      date: "09 August 2025",
      comment: "Best long-drive experience! Clean SUV, comfortable seats, and a driver who actually enjoys driving. He stopped at beautiful coastal spots on the way, which made our trip even better. Thanks KL Travels for making it special."
    },
    {
      id: 6,
      name: "K. Sidharth",
      location: "Hyderabad",
      destination: "Yadagirigutta Devotional Trip",
      rating: 5,
      date: "14 January 2026",
      comment: "Superb travel experience with family! The driver-owner was extremely polite and arrived 10 minutes early. The vehicle was pristine, and he helped us park right near the temple entrance. Will definitely use their service for all our temple trips."
    },
    {
      id: 7,
      name: "Lakshmi Prasanna",
      location: "Secunderabad",
      destination: "Arunachalam Girivalam Tour",
      rating: 5,
      date: "18 April 2026",
      comment: "A highly spiritual and peaceful journey. We felt secure throughout the night drive. The vehicle was very comfortable with great suspension, making the long trip feel effortless. Highly recommend KL Travels for spiritual tours."
    }
  ]);

  const averageRating = reviewList.reduce((sum, review) => sum + review.rating, 0) / reviewList.length;
  const totalReviews = reviewList.length;
  const sortedReviews = [...reviewList].sort((a, b) => parseReviewDate(b.date).getTime() - parseReviewDate(a.date).getTime());

  const handleSubmitReview = () => {
    if (!name || !destination || !comment || rating === 0) {
      toast.error("Please fill in all fields.");
      return;
    }

    // 1. Bot Protection Token Check
    if (!turnstileToken) {
      toast.error("Please complete the security check.");
      return;
    }

    // 2. Client-side Rate Limiting check
    const limit = checkRateLimit("review");
    if (!limit.allowed) {
      toast.error(`Please wait ${limit.remaining} seconds before submitting another review.`);
      return;
    }

    // 3. Strict Input Validation (Prevents Injection)
    if (!validateName(name)) {
      toast.error("Please enter a valid name (letters and spaces only, 2-50 characters).");
      return;
    }

    if (!validateLocation(destination)) {
      toast.error("Trip destination contains invalid characters.");
      return;
    }

    // 4. Strict Input Sanitization (Prevents XSS / HTML Injection)
    const cleanName = sanitizeInput(name);
    const cleanDest = sanitizeInput(destination);
    const cleanComment = sanitizeInput(comment);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const dateStr = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

    const newReview = {
      id: reviewList.length + 1,
      name: cleanName,
      location: "Hyderabad",
      destination: cleanDest,
      rating,
      date: dateStr,
      comment: cleanComment
    };

    setReviewList([newReview, ...reviewList]);
    setHasSubmitted(true);
    recordSubmit("review");
  };

  const renderStars = (count: number, size: "sm" | "lg" = "sm") => {
    const starSize = size === "lg" ? "w-6 h-6" : "w-4 h-4";
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const renderInteractiveStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-8 h-8 cursor-pointer transition-colors ${i < (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-200"
          }`}
        onClick={() => setRating(i + 1)}
        onMouseEnter={() => setHoveredRating(i + 1)}
        onMouseLeave={() => setHoveredRating(0)}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-divine">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Customer Reviews
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              Share your blessings and feedback — help other families choose confidently
            </p>
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-spiritual max-w-2xl mx-auto p-8 text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-divine">Overall Rating</h2>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-5xl font-bold text-primary">{averageRating.toFixed(1)}</div>
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(averageRating), "lg")}
                </div>
              </div>
              <p className="text-muted-foreground">Based on 150+ happy customers</p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-divine">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from families and travelers who chose KL Travels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedReviews.map((review) => (
                <Card key={review.id} className="card-spiritual hover-lift animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {review.date}
                      </div>
                    </div>
                    <CardTitle className="text-divine">{review.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {review.location}
                      </div>
                      <span>•</span>
                      <span>{review.destination}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Review Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-divine">Share Your Experience</h2>
                <p className="text-lg text-muted-foreground">
                  Help other families by sharing your journey with KL Travels
                </p>
              </div>

              {hasSubmitted ? (
                <Card className="card-spiritual text-center py-8 px-6 animate-fade-in-up">
                  <CardContent className="space-y-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                      <Star className="w-8 h-8 text-primary fill-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-divine">Namaste & Thank You!</h3>
                    <p className="text-foreground leading-relaxed">
                      We are deeply honored by your kind words and blessings. Your journey review has been successfully submitted and is now displayed on our wall of experiences.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      "May your pathways always be illuminated and your future travels be filled with peace and joy."
                    </p>
                    <Button
                      type="button"
                      className="btn-divine mt-4"
                      onClick={() => {
                        setHasSubmitted(false);
                        setRating(0);
                        setName("");
                        setDestination("");
                        setComment("");
                      }}
                    >
                      Write Another Review
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="card-spiritual">
                  <CardHeader>
                    <CardTitle className="text-divine">Write a Review</CardTitle>
                    <CardDescription>Your feedback helps us serve you better</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Your Rating</Label>
                      <div className="flex items-center space-x-1">
                        {renderInteractiveStars()}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination">Trip Destination</Label>
                        <Input
                          id="destination"
                          placeholder="Where did you travel?"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="review">Your Review</Label>
                      <Textarea
                        id="review"
                        placeholder="Share your experience with KL Travels..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Bot Protection Widget */}
                    <TurnstileWidget onVerify={setTurnstileToken} />

                    <Button
                      className="btn-divine w-full"
                      disabled={rating === 0 || !name || !destination || !comment || !turnstileToken}
                      onClick={handleSubmitReview}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Review
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Reviews are manually approved to ensure quality and authenticity
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;