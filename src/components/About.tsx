import { Card } from "@/components/ui/card";
import { Leaf, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Biophilic Design",
      description: "Our space is thoughtfully designed with living plants, natural materials, and abundant natural light to reduce stress and boost creativity."
    },
    {
      icon: Heart,
      title: "Wellness Focused",
      description: "Air-purifying plants, ergonomic furniture, and peaceful ambiance create a healthy work environment that nurtures both body and mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Connect with like-minded professionals, attend workshops, and collaborate in spaces designed to spark innovation and growth."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of entrepreneurs, freelancers, and remote workers who value sustainability and meaningful work."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Where <span className="bg-gradient-primary bg-clip-text text-transparent">Work Meets Wellness</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At GreenSpace, we believe that the environment shapes creativity. Our biophilic co-working space 
            combines the tranquility of nature with modern productivity tools, creating an ecosystem where 
            ideas flourish and communities thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 border-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-warm/50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            More Than Just a Workspace
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're cultivating a movement where sustainable practices, human wellness, and professional 
            success grow together. Every detail of our space is designed to inspire, energize, and connect.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>🌱 100% Renewable Energy</span>
            <span>♻️ Zero Waste Initiative</span>
            <span>🌿 50+ Plant Species</span>
            <span>🔄 Sustainable Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;