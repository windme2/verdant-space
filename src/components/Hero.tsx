import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Coffee, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-coworking.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern co-working space with natural light and plants" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Work in 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Nature's</span>
            <br />
            Embrace
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Experience productivity like never before in our biophilic co-working space. 
            Where lush greenery meets modern amenities, creating the perfect environment for creativity and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="warm" 
              size="lg"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <Coffee className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Coffee & Tea</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <Wifi className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">1GB/s</div>
                <div className="text-sm text-muted-foreground">High-Speed WiFi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;