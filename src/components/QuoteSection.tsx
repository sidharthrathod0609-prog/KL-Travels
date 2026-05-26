import { useState } from "react";
import { Phone, MessageCircle, Send, MapPin, Calendar as CalendarIcon, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { sanitizeInput, validateName, validatePhone, validateTravelDate, validateLocation, checkRateLimit, recordSubmit } from "@/lib/security";

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    passengers: "",
    notes: ""
  });

  const [isOpen, setIsOpen] = useState(false);
  const [dateInputVal, setDateInputVal] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) return dateStr;
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      if (parts[0].length === 4) {
        // YYYY-MM-DD
        const [y, m, d] = parts;
        return `${d}-${m}-${y}`;
      }
    }
    return dateStr;
  };

  const isPastDate = (dateStr: string) => {
    if (!dateStr) return false;
    let y = 0, m = 0, d = 0;
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      if (parts[0].length === 4) {
        // YYYY-MM-DD
        y = Number(parts[0]);
        m = Number(parts[1]) - 1;
        d = Number(parts[2]);
      } else if (parts[2].length === 4) {
        // DD-MM-YYYY
        d = Number(parts[0]);
        m = Number(parts[1]) - 1;
        y = Number(parts[2]);
      } else {
        return false;
      }
    } else {
      const timestamp = Date.parse(dateStr);
      if (isNaN(timestamp)) return false;
      const parsed = new Date(timestamp);
      y = parsed.getFullYear();
      m = parsed.getMonth();
      d = parsed.getDate();
    }
    if (isNaN(y) || isNaN(m) || isNaN(d)) return false;
    const selectedDate = new Date(y, m, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today;
  };

  const maskDateInput = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 8);
    let formatted = "";
    if (clean.length > 0) {
      formatted += clean.slice(0, 2);
    }
    if (clean.length > 2) {
      formatted += "-" + clean.slice(2, 4);
    }
    if (clean.length > 4) {
      formatted += "-" + clean.slice(4, 8);
    }
    return formatted;
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedVal = maskDateInput(e.target.value);
    setDateInputVal(maskedVal);
    
    // Check if empty
    if (!maskedVal) {
      setFormData(prev => ({ ...prev, date: "" }));
      return;
    }

    // Try to parse DD-MM-YYYY
    const parts = maskedVal.split("-");
    if (parts.length === 3) {
      const d = Number(parts[0]);
      const m = Number(parts[1]);
      const y = Number(parts[2]);
      if (!isNaN(d) && !isNaN(m) && !isNaN(y) && parts[2].length === 4) {
        const formattedMonth = String(m).padStart(2, '0');
        const formattedDay = String(d).padStart(2, '0');
        const dateStr = `${y}-${formattedMonth}-${formattedDay}`;
        setFormData(prev => ({ ...prev, date: dateStr }));
      }
    }
  };

  const destinations = [
    "Srisailam Temple Tour",
    "Tirupati Darshan", 
    "Pondicherry Getaway",
    "Goa Leisure Trip",
    "Hyderabad Sightseeing",
    "Yadagirigutta",
    "Arunachalam",
    "Shirdi",
    "Varanasi",
    "Gokarna",
    "Custom Destination"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Bot Protection Token Check
    if (!turnstileToken) {
      toast.error("Please complete the security check.");
      return;
    }

    // 2. Client-side Rate Limiting check
    const limit = checkRateLimit("quote");
    if (!limit.allowed) {
      toast.error(`Please wait ${limit.remaining} seconds before requesting another quote.`);
      return;
    }

    // 3. Strict Input Validation (Neutralizes injection attempts)
    if (!validateName(formData.name)) {
      toast.error("Please enter a valid name (letters and spaces only, 2-50 characters).");
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number (10-15 digits).");
      return;
    }

    if (!formData.date) {
      toast.error("Please select a travel date.");
      setIsOpen(true);
      return;
    }

    if (!validateTravelDate(formData.date)) {
      toast.error("Please select a current or future travel date.");
      setIsOpen(true);
      return;
    }

    if (formData.pickup && !validateLocation(formData.pickup)) {
      toast.error("Pickup location contains invalid characters.");
      return;
    }

    // 4. Strict Input Sanitization (Prevents XSS / HTML Injection)
    const cleanName = sanitizeInput(formData.name);
    const cleanPhone = sanitizeInput(formData.phone);
    const cleanPickup = sanitizeInput(formData.pickup || "Hyderabad");
    const cleanDestination = sanitizeInput(formData.destination);
    const cleanDate = formData.date ? formatDateDisplay(formData.date) : "Flexible";
    
    // Construct passengers string from numeric counter state
    const passengersText = `${adults} Adults, ${children} Children`;
    const cleanPassengers = sanitizeInput(passengersText);
    const cleanNotes = formData.notes.trim() ? sanitizeInput(formData.notes) : "None";

    const message = `Hi! I'd like to get a quote for a trip:
    
Name: ${cleanName}
Phone: ${cleanPhone}
Pickup: ${cleanPickup}
Destination: ${cleanDestination}
Date: ${cleanDate}
Passengers: ${cleanPassengers}
Notes: ${cleanNotes}

Please share the best quote. Thank you!`;

    // 5. Secure WhatsApp redirect
    window.open(`https://wa.me/919908590094?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    recordSubmit("quote");
  };

  const handleQuickWhatsApp = () => {
    window.open("https://wa.me/919908590094?text=Hi! I'd like to get a quote for a cab booking.", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919908590094", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-divine">
            Get Your Personalized Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your travel details and get the best fare for your spiritual journey or leisure trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quote Form */}
          <Card className="card-spiritual">
            <CardHeader>
              <CardTitle className="text-divine">Request a Quote</CardTitle>
              <CardDescription>
                Fill in your details and we'll send you the best pricing within minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Area</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pickup"
                      value={formData.pickup}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                      placeholder="Area/Hotel/Airport in Hyderabad"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, destination: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Number of Passengers (Optional) - Left side (7 columns) */}
                  <div className="space-y-2 col-span-12 md:col-span-7">
                    <Label>Number of Passengers (Optional)</Label>
                    <div className="flex items-center justify-around bg-secondary/10 rounded-lg border border-border h-10 px-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-muted-foreground">Adults</span>
                        <div className="flex items-center space-x-1">
                          <button
                            type="button"
                            className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-secondary active:scale-95 transition-all text-foreground"
                            onClick={() => setAdults(prev => Math.max(0, prev - 1))}
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold w-4 text-center text-foreground">{adults}</span>
                          <button
                            type="button"
                            className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-secondary active:scale-95 transition-all text-foreground"
                            onClick={() => setAdults(prev => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="w-px h-5 bg-border" />
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-muted-foreground">Children</span>
                        <div className="flex items-center space-x-1">
                          <button
                            type="button"
                            className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-secondary active:scale-95 transition-all text-foreground"
                            onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold w-4 text-center text-foreground">{children}</span>
                          <button
                            type="button"
                            className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-secondary active:scale-95 transition-all text-foreground"
                            onClick={() => setChildren(prev => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Date * - Right side (5 columns) */}
                  <div className="space-y-2 col-span-12 md:col-span-5">
                    <Label htmlFor="date">Travel Date *</Label>
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger asChild>
                        <div className="relative cursor-pointer">
                          <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                          <Input
                            id="date"
                            type="text"
                            placeholder="DD-MM-YYYY"
                            value={dateInputVal}
                            onChange={handleDateInputChange}
                            className="pl-10 pr-10 cursor-pointer"
                            required
                          />
                          <span className="absolute right-3 top-3 text-muted-foreground hover:text-foreground cursor-pointer z-10">
                            <CalendarIcon className="h-4 w-4" />
                          </span>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border border-border bg-card" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={formData.date ? new Date(formData.date + "T00:00:00") : undefined}
                          onSelect={(date) => {
                            if (!date) {
                              setFormData(prev => ({ ...prev, date: "" }));
                              setDateInputVal("");
                              return;
                            }
                            const y = date.getFullYear();
                            const m = String(date.getMonth() + 1).padStart(2, '0');
                            const d = String(date.getDate()).padStart(2, '0');
                            const dateStr = `${y}-${m}-${d}`;
                            setFormData(prev => ({ ...prev, date: dateStr }));
                            setDateInputVal(`${d}-${m}-${y}`);
                            setIsOpen(false);
                          }}
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {formData.date && isPastDate(formData.date) && (
                      <div className="text-red-500 text-xs mt-1.5 flex items-center justify-between bg-red-500/10 border border-red-500/20 p-2 rounded-md animate-fade-in-up">
                        <span className="flex items-center gap-1.5 font-medium">
                          ⚠️ Travel date cannot be in the past.
                        </span>
                        <button
                          type="button"
                          className="text-primary hover:underline font-bold text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(true);
                          }}
                        >
                          Fix Date
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Special requirements, preferred vehicle type, duration, etc."
                    rows={3}
                  />
                </div>

                {/* Bot Protection Widget */}
                <TurnstileWidget onVerify={setTurnstileToken} />

                <Button 
                  type="submit" 
                  className="w-full btn-divine" 
                  size="lg"
                  disabled={!turnstileToken}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Get Quote on WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact & Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="card-spiritual">
              <CardHeader>
                <CardTitle className="text-divine">Quick Contact</CardTitle>
                <CardDescription>
                  Prefer to talk directly? Reach us instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handleQuickWhatsApp} className="w-full btn-divine" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: +91 99085 90094
                </Button>
                <Button onClick={handleCall} variant="outline" className="w-full" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 99085 90094
                </Button>
                <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                  Available 24/7 • Quick response guaranteed
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Our Quote System */}
            <Card className="card-spiritual">
              <CardHeader>
                <CardTitle className="text-divine">Why Our Pricing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Transparent pricing - no hidden charges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Customized quotes based on your needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Includes fuel, driver allowance, tolls</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Drop + return trips included</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Best rates guaranteed</span>
                </div>
              </CardContent>
            </Card>

            {/* Service Guarantee */}
            <Card className="card-spiritual bg-gradient-subtle">
              <CardContent className="text-center py-8">
                <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-divine mb-2">Service Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Clean vehicles • Experienced drivers • On-time pickup • 24/7 support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;