import { Card } from "@/components/ui/card";
import { 
  Wifi, 
  Coffee, 
  Car, 
  Phone, 
  Users, 
  Printer, 
  Shield, 
  Clock,
  Gamepad2,
  Utensils
} from "lucide-react";
import amenitiesImage from "@/assets/amenities-bg.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fiber optic 1GB/s connectivity with backup systems"
    },
    {
      icon: Coffee,
      title: "Premium Coffee Bar",
      description: "Artisan coffee, tea, and healthy snacks available 24/7"
    },
    {
      icon: Users,
      title: "Meeting Rooms",
      description: "Bookable spaces with AV equipment and natural lighting"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Free secure parking with EV charging stations"
    },
    {
      icon: Phone,
      title: "Phone Booths",
      description: "Private soundproof booths for calls and video meetings"
    },
    {
      icon: Printer,
      title: "Business Center",
      description: "Printing, scanning, and office supplies readily available"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Secure keycard access and on-site security personnel"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Access your workspace anytime that suits your schedule"
    },
    {
      icon: Gamepad2,
      title: "Relaxation Zone",
      description: "Gaming area and quiet meditation space for breaks"
    },
    {
      icon: Utensils,
      title: "Kitchen Facilities",
      description: "Fully equipped kitchen with refrigerator and microwave"
    }
  ];

  return (
    <section id="amenities" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={amenitiesImage} 
          alt="Co-working space amenities" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to <span className="bg-gradient-primary bg-clip-text text-transparent">Thrive</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our thoughtfully curated amenities ensure you have everything you need for a productive, 
            comfortable, and enjoyable work experience surrounded by nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 border-0 group hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <amenity.icon className="h-6 w-6 text-sage-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🧘</span>
              <span>Yoga Studio</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🎙️</span>
              <span>Podcast Studio</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🌱</span>
              <span>Rooftop Garden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;