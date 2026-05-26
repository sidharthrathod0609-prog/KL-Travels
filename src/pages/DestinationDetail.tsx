import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone, MessageCircle, Calendar, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarTypes from "@/components/CarTypes";
import srisailamImg from "@/assets/srisailam.jpg";
import tirupatiImg from "@/assets/tirupati.jpg";
import pondicherryImg from "@/assets/pondicherry.jpg";
import goaImg from "@/assets/goa.jpg";
import hyderabadImg from "@/assets/hyderabad.jpg";

const DestinationDetail = () => {
  const { id } = useParams();

  const destinationData = {
    srisailam: {
      name: "Srisailam Temple Tour",
      image: srisailamImg,
      type: "Temple",
      duration: "Day Trip",
      overview: "A revered Jyotirlinga and Shakti Peeth nestled in the Nallamala forest, Srisailam offers a peaceful spiritual retreat ideal for a day trip from Hyderabad. The temple complex sits majestically on the banks of the Krishna River, surrounded by pristine forests and ancient architecture.",
      highlights: [
        "Mallikarjuna Swamy Temple (Jyotirlinga)",
        "Bhramaramba Devi Temple (Shakti Peeth)", 
        "Srisailam Dam viewpoints",
        "Pathala Ganga and Krishna River",
        "Ancient cave temples",
        "Peaceful forest surroundings"
      ],
      bestTime: "October to February; early mornings for smooth darshan",
      dresscode: "Traditional Indian attire preferred; no leather items",
      itinerary: [
        "Early morning departure (5:00 AM)",
        "Breakfast stop en route",
        "Temple darshan and prayers",
        "Lunch at local restaurant",
        "Dam viewpoints and Pathala Ganga",
        "Return journey (evening)"
      ],
      packages: [
        {
          name: "Day Trip Package",
          duration: "12-14 hours",
          includes: ["AC Cab with driver", "Fuel charges", "Driver allowance", "Parking fees"],
          price: "Contact for quote",
          bestFor: "Families, Pilgrims"
        },
        {
          name: "Comfortable Package",
          duration: "12-14 hours", 
          includes: ["Premium AC Cab", "Fuel & toll charges", "Driver meals & stay", "Temple guide assistance"],
          price: "Contact for quote",
          bestFor: "Senior citizens, VIP experience"
        }
      ]
    },
    tirupati: {
      name: "Tirupati Darshan",
      image: tirupatiImg,
      type: "Temple",
      duration: "1-2 Days",
      overview: "One of India's most visited pilgrimage sites, Tirupati is home to the famous Tirumala Venkateswara Temple. Known for its rich traditions, divine laddu prasadam, and spiritual atmosphere, it attracts millions of devotees seeking Lord Balaji's blessings.",
      highlights: [
        "Tirumala Venkateswara Temple",
        "Sacred laddu prasadam",
        "Alipiri steps (optional trek)",
        "Sri Kapileswara Swamy Temple",
        "TTD gardens and viewpoints",
        "Local silk and religious items"
      ],
      bestTime: "Weekdays preferred; book darshan tickets in advance",
      dresscode: "Traditional attire mandatory; dhoti for men, saree/salwar for women",
      itinerary: [
        "Day 1: Departure and check-in",
        "Evening: Local temple visits",
        "Day 2: Early morning darshan",
        "Breakfast and prasadam",
        "Shopping and return journey"
      ],
      packages: [
        {
          name: "Single Day Package",
          duration: "18-20 hours",
          includes: ["AC Cab round trip", "Fuel charges", "Driver allowance", "Darshan assistance"],
          price: "Contact for quote",
          bestFor: "Quick darshan trips"
        },
        {
          name: "2 Day Package",
          duration: "2 Days/1 Night",
          includes: ["AC Cab with driver", "Hotel accommodation", "All charges", "Local sightseeing"],
          price: "Contact for quote", 
          bestFor: "Comfortable pilgrimage"
        }
      ]
    },
    pondicherry: {
      name: "Pondicherry Getaway",
      image: pondicherryImg,
      type: "Coastal",
      duration: "2-3 Days",
      overview: "A charming blend of French colonial heritage and Tamil culture, Pondicherry offers serene beaches, spiritual ashrams, and vibrant streets. The coastal town provides the perfect escape with its unique European architecture and peaceful Mediterranean vibe.",
      highlights: [
        "French Quarter and colonial architecture",
        "Aurobindo Ashram and Auroville",
        "Paradise Beach and Promenade",
        "Botanical Gardens",
        "Local French cafes and cuisine",
        "Manakula Vinayagar Temple"
      ],
      bestTime: "October to March for pleasant weather",
      dresscode: "Casual comfortable clothing; modest attire for temples",
      itinerary: [
        "Day 1: Travel and French Quarter exploration",
        "Day 2: Auroville, beaches, and local sightseeing",
        "Day 3: Leisure time and return journey"
      ],
      packages: [
        {
          name: "Weekend Package",
          duration: "2 Days/1 Night",
          includes: ["AC Cab round trip", "Hotel stay", "Local sightseeing", "Driver accommodation"],
          price: "Contact for quote",
          bestFor: "Quick weekend getaway"
        },
        {
          name: "Leisure Package",
          duration: "3 Days/2 Nights",
          includes: ["Premium AC Cab", "Beach resort stay", "All sightseeing", "Meals included"],
          price: "Contact for quote",
          bestFor: "Families, couples"
        }
      ]
    },
    goa: {
      name: "Goa Leisure Trip",
      image: goaImg,
      type: "Coastal",
      duration: "3-4 Days",
      overview: "India's beach paradise offers golden sands, vibrant nightlife, Portuguese heritage, and delicious seafood. From pristine beaches to historic churches, Goa provides the perfect blend of relaxation and adventure for families and friends.",
      highlights: [
        "Calangute and Baga beaches",
        "Basilica of Bom Jesus",
        "Dudhsagar Waterfalls",
        "Old Goa heritage sites",
        "Local feni and seafood",
        "Anjuna flea market"
      ],
      bestTime: "November to February for ideal beach weather",
      dresscode: "Beach casual; respectful attire for churches",
      itinerary: [
        "Day 1: Travel and North Goa beaches",
        "Day 2: Old Goa churches and heritage tour",
        "Day 3: South Goa beaches and leisure",
        "Day 4: Shopping and departure"
      ],
      packages: [
        {
          name: "Beach Package",
          duration: "3 Days/2 Nights",
          includes: ["AC Cab with driver", "Beach resort", "North & South Goa tour", "All charges"],
          price: "Contact for quote",
          bestFor: "Beach lovers, families"
        },
        {
          name: "Complete Package",
          duration: "4 Days/3 Nights",
          includes: ["Premium vehicle", "Resort accommodation", "All sightseeing", "Adventure activities"],
          price: "Contact for quote",
          bestFor: "Groups, extended vacation"
        }
      ]
    },
    hyderabad: {
      name: "Hyderabad Sightseeing",
      image: hyderabadImg,
      type: "City",
      duration: "Full Day",
      overview: "Discover the City of Pearls with its magnificent palaces, ancient forts, bustling markets, and modern IT hubs. Hyderabad seamlessly blends royal heritage with contemporary culture, offering a rich tapestry of experiences in the Deccan region.",
      highlights: [
        "Charminar and Laad Bazaar",
        "Golconda Fort and Sound & Light show",
        "Ramoji Film City",
        "Birla Mandir and Hussain Sagar",
        "Salar Jung Museum",
        "HITEC City and modern landmarks"
      ],
      bestTime: "October to March; avoid afternoon summer heat",
      dresscode: "Comfortable walking shoes; modest attire for religious sites",
      itinerary: [
        "Morning: Charminar and Old City",
        "Afternoon: Golconda Fort",
        "Evening: Hussain Sagar and Birla Mandir",
        "Night: Local dinner and return"
      ],
      packages: [
        {
          name: "City Tour Package",
          duration: "8-10 hours",
          includes: ["AC Cab with driver", "All entry tickets", "Fuel charges", "Guide assistance"],
          price: "Contact for quote",
          bestFor: "Tourists, first-time visitors"
        },
        {
          name: "Heritage Package",
          duration: "Full day",
          includes: ["Premium cab", "Heritage site entries", "Traditional lunch", "Photography assistance"],
          price: "Contact for quote",
          bestFor: "Heritage enthusiasts"
        }
      ]
    },
    yadagirigutta: {
      name: "Yadagirigutta Devotional Trip",
      image: srisailamImg,
      type: "Temple",
      duration: "Day Trip",
      overview: "Yadadri (Yadagirigutta) is a highly popular hilltop temple dedicated to Lord Lakshmi Narasimha Swamy. Recently renovated with majestic black stone architecture, it stands as a magnificent testament to Dravidian temple style and is a quick, blissful pilgrimage from Hyderabad.",
      highlights: [
        "Sri Lakshmi Narasimha Swamy Main Temple",
        "Beautifully carved black stone pillars (Krishna Shila)",
        "Giri Pradakshina road",
        "Temple pond and bathing ghats",
        "Special Darshan experience",
        "Vaikuntha Dwaram and viewpoints"
      ],
      bestTime: "All year round; weekends and festivals are crowded",
      dresscode: "Traditional Indian attire (Dhoti, Kurta / Saree, Salwar Kameez)",
      itinerary: [
        "Morning departure from Hyderabad (6:00 AM)",
        "Drive to Yadagirigutta (approx. 1.5 - 2 hours)",
        "Reach the hilltop and purchase darshan tickets",
        "Devotional darshan and holy prayers",
        "Laddoo prasadam purchase and lunch",
        "Visit local sights en route and return to Hyderabad"
      ],
      packages: [
        {
          name: "Standard Day Trip",
          duration: "8-10 hours",
          includes: ["AC Cab with driver", "Fuel charges", "Driver allowance", "Tolls & parking fees"],
          price: "Contact for quote",
          bestFor: "Families, Pilgrims"
        },
        {
          name: "Divine VIP Package",
          duration: "8-10 hours",
          includes: ["Premium AC Cab", "Fuel & toll charges", "Driver meals & stay", "VIP Darshan assistance"],
          price: "Contact for quote",
          bestFor: "Senior citizens, VIP experience"
        }
      ]
    },
    arunachalam: {
      name: "Arunachalam Girivalam Tour",
      image: tirupatiImg,
      type: "Temple",
      duration: "2 Days",
      overview: "Arunachalam (Tiruvannamalai) in Tamil Nadu is one of the most sacred Shiva pilgrim centers, representing the element of Fire (Agni). Devotees visit for Girivalam—the holy 14 km barefoot walk around the sacred Arunachala hill to seek peace, liberation, and spiritual blessings.",
      highlights: [
        "Annamalaiyar Temple (Lord Shiva)",
        "Arunachala Hill (Fire element incarnation)",
        "Girivalam (14 km holy walk)",
        "Sri Ramana Ashram",
        "Sri Yogi Ramsuratkumar Ashram",
        "Vibrant full moon (Pournami) energy"
      ],
      bestTime: "September to March; during cooler months or full moon nights",
      dresscode: "Modest Indian traditional clothing; strict dress code inside the main temple",
      itinerary: [
        "Day 1: Depart from Hyderabad early morning, arrive at Tiruvannamalai",
        "Check in and visit Annamalaiyar Temple in the evening",
        "Night/Early Morning: Begin Girivalam holy walk (14 km)",
        "Day 2: Visit Ramana Ashram and meditation caves",
        "Lunch, local temple sights, and return journey to Hyderabad"
      ],
      packages: [
        {
          name: "Standard Tour",
          duration: "2 Days/1 Night",
          includes: ["AC Cab round trip", "Fuel & Toll charges", "Driver allowance", "Hotel accommodation"],
          price: "Contact for quote",
          bestFor: "Pilgrims, Families"
        },
        {
          name: "Premium Girivalam",
          duration: "2 Days/2 Nights",
          includes: ["Premium AC Cab", "Scenic route stops", "Premium hotel stay", "Local temple guide"],
          price: "Contact for quote",
          bestFor: "VIP pilgrims, Elder travelers"
        }
      ]
    },
    shirdi: {
      name: "Shirdi Sai Baba Darshan",
      image: srisailamImg,
      type: "Temple",
      duration: "2 Days",
      overview: "Shirdi is the sacred home of the revered 19th-century saint Sai Baba. Millions of pilgrims travel here to pay respect at his Samadhi Mandir, experience the tranquil atmosphere of Dwarkamai, and seek blessings of universal peace, love, and tolerance.",
      highlights: [
        "Sai Baba Samadhi Mandir",
        "Dwarkamai (sacred mosque where Baba lived)",
        "Chavadi and Lendi Baug",
        "Khandoba Temple",
        "Gurusthan (holy neem tree)",
        "Sai Teerth Spiritual Theme Park"
      ],
      bestTime: "Winter months (October to March); Thursday is the special day of the week",
      dresscode: "Comfortable and respectful traditional attire",
      itinerary: [
        "Day 1: Departure from Hyderabad, scenic drive to Shirdi",
        "Check-in, afternoon rest, and Kakad/Dhoop Aarti booking",
        "Evening: Samadhi Mandir Darshan and Dwarkamai visit",
        "Day 2: Morning Aarti, Gurusthan and local temple tour",
        "Prasadam lunch and return journey to Hyderabad"
      ],
      packages: [
        {
          name: "Divine Darshan",
          duration: "2 Days/1 Night",
          includes: ["AC Cab with driver", "Fuel & Toll charges", "Driver allowance", "Hotel stay"],
          price: "Contact for quote",
          bestFor: "Quick darshan trips"
        },
        {
          name: "Premium Devotional",
          duration: "3 Days/2 Nights",
          includes: ["Premium AC Cab", "Hotel booking assistance", "All tolls & parking", "Local sightseeing"],
          price: "Contact for quote",
          bestFor: "Comfortable family pilgrimage"
        }
      ]
    },
    varanasi: {
      name: "Varanasi Spiritual Tour",
      image: tirupatiImg,
      type: "Temple",
      duration: "3-4 Days",
      overview: "Varanasi (Kashi) is one of the oldest continuously inhabited cities in the world and the spiritual heart of India. Located on the banks of the sacred Ganges River, it is known for its mystical ghats, the grand Ganga Aarti, and the holy Kashi Vishwanath temple.",
      highlights: [
        "Kashi Vishwanath Temple (Golden Temple)",
        "Subah-e-Banaras and Sunrise boat ride",
        "Spectacular Evening Ganga Aarti at Dashashwamedh Ghat",
        "Sarnath (site of Lord Buddha's first sermon)",
        "Banarasi silk weaving centers",
        "Assi Ghat and Manikarnika Ghat"
      ],
      bestTime: "October to March (cool and pleasant weather)",
      dresscode: "Conservative clothing suitable for holy sites; cover shoulders and knees",
      itinerary: [
        "Day 1: Depart from Hyderabad, arrive and check in at Varanasi",
        "Evening: Witness the grand Dashashwamedh Ghat Ganga Aarti",
        "Day 2: Kashi Vishwanath Temple darshan, explore ancient alleys",
        "Afternoon: Excursion to Sarnath Buddhist sites",
        "Day 3: Sunrise boat ride on the Ganges, visit Assi Ghat and temples",
        "Day 4: Local shopping for Banarasi sarees and departure"
      ],
      packages: [
        {
          name: "Kashi Darshan Package",
          duration: "3 Days/2 Nights",
          includes: ["AC Cab with driver", "Local tour coordinator", "All fuel, parking & toll charges", "Driver allowance"],
          price: "Contact for quote",
          bestFor: "Spiritual explorers"
        },
        {
          name: "Maha Kashi Package",
          duration: "4 Days/3 Nights",
          includes: ["Premium SUV", "Ganges boat ride booking", "Sarnath excursion tour", "Hotel stays included"],
          price: "Contact for quote",
          bestFor: "Families, VIP groups"
        }
      ]
    },
    gokarna: {
      name: "Gokarna Beach & Temple Tour",
      image: pondicherryImg,
      type: "Coastal",
      duration: "2-3 Days",
      overview: "Gokarna is a unique town in Karnataka that blends coastal beauty with deep religious heritage. Famous for the Mahabaleshwar Temple housing the Atmalinga of Lord Shiva, it also attracts travelers seeking peace on its untouched half-moon and Om beaches.",
      highlights: [
        "Mahabaleshwar Temple (Atmalinga of Shiva)",
        "Om Beach (shaped like the sacred symbol Om)",
        "Kudle Beach and Half Moon Beach",
        "Moti Jheel and Kotitheertha holy pond",
        "Sunset viewpoints and beach trekking",
        "Quiet and laid-back shacks"
      ],
      bestTime: "October to March when weather is dry and breezy",
      dresscode: "Casual wear for beaches; traditional/decent attire for temple entry",
      itinerary: [
        "Day 1: Journey from Hyderabad to Gokarna, check-in, visit Kudle Beach",
        "Day 2: Morning temple darshan, afternoon Om Beach trek and sunset boat cruise",
        "Day 3: Local sightseeing, shopping for spices, and return journey"
      ],
      packages: [
        {
          name: "Coastal Pilgrimage",
          duration: "2 Days/1 Night",
          includes: ["AC Cab round trip", "Fuel & Toll charges", "Driver meals & stay", "Local sightseeing"],
          price: "Contact for quote",
          bestFor: "Pilgrims and families"
        },
        {
          name: "Om Beach Getaway",
          duration: "3 Days/2 Nights",
          includes: ["Premium AC Cab", "Beach trek assistance", "All tolls & taxes", "Resort stay booking help"],
          price: "Contact for quote",
          bestFor: "Youth groups, beach lovers"
        }
      ]
    }
  };

  const destination = destinationData[id as keyof typeof destinationData];

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 text-center py-20">
          <h1 className="text-2xl text-foreground">Destination not found</h1>
          <Link to="/destinations" className="text-primary underline">Back to Destinations</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = (packageName?: string) => {
    const message = packageName 
      ? `Hi! I'd like to get a quote for ${packageName} to ${destination.name}`
      : `Hi! I'd like to get a quote for a trip to ${destination.name}`;
    window.open(`https://wa.me/919908590094?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919908590094", "_self");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>→</span>
              <Link to="/destinations" className="hover:text-primary">Destinations</Link>
              <span>→</span>
              <span className="text-foreground">{destination.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-divine">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/destinations">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Destinations
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="badge-divine">{destination.type}</Badge>
                  <div className="flex items-center text-white/90">
                    <Clock className="w-4 h-4 mr-2" />
                    {destination.duration}
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {destination.name}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {destination.overview}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => handleWhatsApp()} size="lg" className="bg-white text-primary hover:bg-white/90">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Quote on WhatsApp
                  </Button>
                  <Button onClick={handleCall} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Highlights */}
                <Card className="card-spiritual">
                  <CardHeader>
                    <CardTitle className="text-divine">Highlights & Attractions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Sample Itinerary */}
                <Card className="card-spiritual">
                  <CardHeader>
                    <CardTitle className="text-divine">Sample Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {destination.itinerary.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-primary">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Important Notes */}
                <Card className="card-spiritual">
                  <CardHeader>
                    <CardTitle className="text-divine">Important Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Best Time to Visit</h4>
                      <p className="text-muted-foreground">{destination.bestTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dress Code</h4>
                      <p className="text-muted-foreground">{destination.dresscode}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pickup & Drop</h4>
                      <p className="text-muted-foreground">Pickup from anywhere in Hyderabad (home/hotel/airport). Drop + Return included with waiting time.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Packages */}
              <div className="space-y-6">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-bold text-divine mb-6">Available Packages</h3>
                  <div className="space-y-6">
                    {destination.packages.map((pkg, index) => (
                      <Card key={index} className="card-spiritual">
                        <CardHeader>
                          <CardTitle className="text-lg">{pkg.name}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {pkg.duration}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h5 className="font-medium text-foreground mb-2">Includes:</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {pkg.includes.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary mr-2">✓</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Best for: {pkg.bestFor}</span>
                          </div>
                          <div className="pt-4 border-t">
                            <div className="text-center mb-4">
                              <span className="text-lg font-bold text-primary">{pkg.price}</span>
                            </div>
                            <Button 
                              onClick={() => handleWhatsApp(pkg.name)}
                              className="w-full btn-divine"
                            >
                              Get Quote
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Contact Card */}
                  <Card className="card-spiritual mt-8">
                    <CardHeader>
                      <CardTitle className="text-divine">Need Custom Package?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        We share flexible quotes based on date, duration, and group size. Contact us for personalized packages.
                      </p>
                      <div className="space-y-3">
                        <Button onClick={() => handleWhatsApp("custom package")} className="w-full btn-divine">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp Us
                        </Button>
                        <Button onClick={handleCall} variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                      <div className="text-center pt-4 border-t">
                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          Available 24/7
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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

export default DestinationDetail;