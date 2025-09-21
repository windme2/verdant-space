import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our <span className="bg-gradient-primary bg-clip-text text-transparent">Green Oasis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the future of work? Come visit our biophilic co-working space 
            and see how nature can transform your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Green Valley Boulevard<br />
                    Eco District, Bangkok 10110<br />
                    Thailand
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +66 (0) 2-XXX-XXXX<br />
                    Available 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    hello@greenspace.co<br />
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 24/7</p>
                    <p>Saturday - Sunday: 8 AM - 8 PM</p>
                    <p className="text-sm">Member access available 24/7</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tour Booking */}
          <div>
            <Card className="p-8 bg-card/90 backdrop-blur-sm shadow-soft border-0">
              <div className="text-center mb-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Book a Tour</h3>
                <p className="text-muted-foreground">
                  Experience our green workspace firsthand. Schedule a personal tour and see why 
                  nature and productivity go hand in hand.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your workspace needs..."
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Schedule Tour
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By booking a tour, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;