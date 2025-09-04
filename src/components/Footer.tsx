import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Media */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/1517ac0f-1f3b-477d-bc0f-676754f378b8.png" 
              alt="VERO"
              className="h-12 w-auto"
            />
            <span className="ml-3 text-2xl font-bold text-foreground">Auto Glass</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/Vero-Auto-Glass/61578364913402/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline text-sm">Auto glass FAQ</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Windshield replacement</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Window repair</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">ADAS calibration</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline text-sm">Mobile service</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Our technicians</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Contact</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Service areas</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline text-sm">Get instant quote</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Customer reviews</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Price comparison</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Insurance guide</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary hover:underline text-sm">Schedule appointment</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Glass types</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Careers</a></li>
              <li><a href="#" className="text-primary hover:underline text-sm">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Company Info - Moved to bottom */}
        <div className="text-center mb-8">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">VERO Auto Glass</p>
            <p>2300 W Sahara Ave #800, Las Vegas, NV 89102</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
