
import { Button } from "@/components/ui/button";
import autoGlassLeft from "@/assets/auto-glass-left.svg";
import autoGlassRight from "@/assets/auto-glass-right.svg";
import { useState, useEffect } from "react";
import { Phone, FileText } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-b from-background to-secondary/20 pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(/lovable-uploads/cc206998-4cf3-45ed-8ac8-521af213f746.png)`
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/10" />
      {/* Left illustration */}
      <div className="absolute left-0 bottom-0 w-1/3 opacity-20">
        <img 
          src={autoGlassLeft} 
          alt="" 
          className="w-full h-auto"
        />
      </div>

      {/* Right illustration */}
      <div className="absolute right-0 bottom-0 w-1/3 opacity-20">
        <img 
          src={autoGlassRight} 
          alt="" 
          className="w-full h-auto"
        />
      </div>

      {/* Large VERO Logo */}
      <div 
        className="fixed transition-all duration-700 ease-in-out z-[70]"
        style={{
          top: scrollY > 50 ? '8px' : '8vh',
          left: scrollY > 50 ? '50%' : '50%',
          transform: scrollY > 50 ? 'translateX(-50%)' : 'translateX(-50%)',
          width: scrollY > 50 
            ? (windowWidth < 768 ? '45px' : '83px') 
            : (windowWidth < 768 ? '297px' : '396px'),
          height: scrollY > 50 ? 'auto' : 'auto'
        }}
      >
        <img 
          src="/lovable-uploads/1517ac0f-1f3b-477d-bc0f-676754f378b8.png" 
          alt="VERO"
          className="w-full h-auto"
        />
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-black mt-24 md:mt-0">
          <div>Auto Glass</div>
          <div>Made <span className="text-primary font-bold">Simple</span></div>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Instant quotes. Expert installation. Perfect calibration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = 'tel:+17252141872'}
          >
            <Phone className="w-4 h-4 mr-2" />
            INSTANT PHONE QUOTE
          </Button>
          
          <Button 
            size="default" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-5 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/quote'}
          >
            <FileText className="w-4 h-4 mr-2" />
            INSTANT ONLINE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
