import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const SpeakToAgentButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-6 z-[70] transition-all duration-300"
      style={{
        top: scrollY > 50 ? '64px' : '80px'
      }}
    >
      <Button 
        className="bg-white text-black hover:bg-gray-50 border border-gray-200 shadow-lg px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center gap-1 md:gap-2 font-medium text-xs md:text-base"
        onClick={() => window.location.href = 'tel:+17252141872'}
      >
        <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 text-orange-500" />
        <span className="underline">Speak to an agent</span>
      </Button>
    </div>
  );
};

export default SpeakToAgentButton;
