import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">GreenSpace</span>
            </div>
            <p className="text-forest-foreground/80 leading-relaxed mb-6 max-w-md">
              Where nature meets productivity. Join our community of conscious professionals 
              working in harmony with the environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-forest-foreground/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-forest-foreground/80 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-forest-foreground/80 hover:text-primary transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-forest-foreground/80 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-forest-foreground/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-forest-foreground/80">
              <p>123 Green Valley Boulevard</p>
              <p>Bangkok 10110, Thailand</p>
              <p>+66 (0) 2-XXX-XXXX</p>
              <p>hello@greenspace.co</p>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-forest-foreground/60 text-sm">
              © 2024 GreenSpace. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-forest-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;