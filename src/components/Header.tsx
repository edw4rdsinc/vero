import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header 
        className="fixed top-0 w-full py-4 px-6 flex items-center justify-between border-b border-border/10 bg-background/95 backdrop-blur-sm z-[60]"
      >
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center space-x-8 transition-all duration-700"
          style={{
            transform: scrollY > 50 ? 'translateX(-20px) scale(0.9)' : 'translateX(0) scale(1)'
          }}
        >
          <a 
            href="/"
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            Home
          </a>
          <a 
            href="/services"
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            Services
          </a>
          <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Insurance
          </span>
          <div 
            className="relative" 
            ref={dropdownRef}
          >
            <button 
              className="flex items-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Resources
              <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-44 bg-background border border-border rounded-lg shadow-lg z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <ul className="py-2 text-sm">
                  <li>
                    <a href="/faq" className="block px-4 py-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="/additionalinfo" className="block px-4 py-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                      Additional Info
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Placeholder for centered logo - it's positioned by Hero component */}
        <div className="flex-1 md:block hidden"></div>

      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] md:hidden">
          {/* Close button in top right */}
          <button
            className="absolute top-4 right-6 p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <a 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a 
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            >
              Insurance
            </button>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-2xl text-muted-foreground">Resources</span>
              <div className="flex flex-col items-center space-y-2">
                <a 
                  href="/faq" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ's
                </a>
                <a 
                  href="/additionalinfo" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  Additional Info
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
