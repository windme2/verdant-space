import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Seed",
      price: "29",
      period: "day",
      description: "Perfect for trying out our green oasis",
      features: [
        "Day pass access",
        "High-speed WiFi",
        "Coffee & tea included",
        "Access to common areas",
        "Phone booth usage"
      ],
      popular: false,
      buttonVariant: "warm" as const
    },
    {
      name: "Sprout",
      price: "199",
      period: "month",
      description: "Ideal for freelancers and remote workers",
      features: [
        "24/7 workspace access",
        "Dedicated desk option",
        "Meeting room credits (5hrs)",
        "All amenities included",
        "Community events",
        "Business address service",
        "Printing allowance"
      ],
      popular: true,
      buttonVariant: "hero" as const
    },
    {
      name: "Forest",
      price: "399",
      period: "month",
      description: "For teams and growing businesses",
      features: [
        "Private office space",
        "Unlimited meeting rooms",
        "Team collaboration tools",
        "Priority booking",
        "Custom branding options",
        "Dedicated support",
        "Kitchen access",
        "Storage solutions"
      ],
      popular: false,
      buttonVariant: "sage" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're planting the seeds of a new venture or nurturing an established business, 
            we have the perfect environment for your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 bg-card/90 backdrop-blur-sm shadow-soft hover:shadow-warm transition-all duration-300 border-0 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {plan.name === "Seed" ? "Get Day Pass" : plan.name === "Sprout" ? "Start Growing" : "Scale Up"}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-warm/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Corporate & Custom Plans
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Need something more tailored? We offer custom solutions for teams of 10+ members, 
              including dedicated floors, custom branding, and specialized amenities.
            </p>
            <Button variant="hero" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;