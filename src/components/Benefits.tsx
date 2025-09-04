import { useState, useEffect } from "react";
import insuranceBillingImage from "@/assets/insurance-billing-professional.jpg";
import warrantyShieldImage from "@/assets/warranty-shield-professional.jpg";
const sameDayServiceImage = "/lovable-uploads/21109a16-4a1d-4f1c-b9a4-18b6dfe89903.png";
import oemQualityImage from "@/assets/oem-quality-professional.jpg";
import expertTechnicianImage from "@/assets/expert-technician-professional.jpg";
import customerSupportImage from "@/assets/customer-support-professional.jpg";
const buyNowPayLaterImage = "/lovable-uploads/6c9b520e-9479-40be-a27a-22c91fb7221f.png";
const adasCalibrationImage = "/lovable-uploads/d0df4497-a133-45e1-8f6c-cce55f6f0350.png";
const competitivePricesImage = "/lovable-uploads/8b587e7f-da38-49c4-9ada-1bb7d22b3f2f.png";

const Benefits = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      // If the clicked card is already flipped, just flip it back
      if (prev[index]) {
        return {
          ...prev,
          [index]: false
        };
      }
      
      // Otherwise, flip back all other cards and flip this one
      const newState: { [key: number]: boolean } = {};
      Object.keys(prev).forEach(key => {
        newState[parseInt(key)] = false;
      });
      newState[index] = true;
      return newState;
    });
  };

  // Auto-flip back after 8 seconds
  useEffect(() => {
    const intervals: { [key: number]: NodeJS.Timeout } = {};
    
    Object.keys(flippedCards).forEach(key => {
      const index = parseInt(key);
      if (flippedCards[index]) {
        intervals[index] = setTimeout(() => {
          setFlippedCards(prev => ({
            ...prev,
            [index]: false
          }));
        }, 5000);
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearTimeout(interval));
    };
  }, [flippedCards]);

  const benefits = [
    {
      image: warrantyShieldImage,
      title: "Lifetime warranty",
      shortDescription: "Complete protection",
      fullDescription: "Every installation comes with a comprehensive lifetime warranty for your peace of mind and protection."
    },
    {
      image: "/lovable-uploads/b7aee1ac-0b88-40e5-afe0-4c321713fb0c.png",
      title: "Premium parts",
      shortDescription: "OEM Quality glass",
      fullDescription: "We use only Original Equipment Manufacturer quality glass that meets or exceeds industry safety standards."
    },
    {
      image: "/lovable-uploads/1661b110-d664-4c24-b621-b220ac7283e5.png",
      title: "Direct insurance billing",
      shortDescription: "No upfront costs",
      fullDescription: "We handle all insurance paperwork and billing directly. No upfront costs or complicated claims processes."
    },
    {
      image: adasCalibrationImage,
      title: "Full safety system recalibration",
      shortDescription: "ADAS included",
      fullDescription: "Advanced driver assistance systems (ADAS) recalibration included to ensure all safety features work properly after installation."
    },
    {
      image: sameDayServiceImage,
      title: "Free mobile service",
      shortDescription: "We come to you",
      fullDescription: "We offer mobile auto glass installation at your home, or your office, or any location that is convenient."
    },
    {
      image: customerSupportImage,
      title: "Deductible assistance",
      shortDescription: "Deductible help",
      fullDescription: "Most insurance companies will waive your deductible for windshield repairs. We will assist in verifying your deductible amount."
    },
    {
      image: expertTechnicianImage,
      title: "Certified expert technicians",
      shortDescription: "Professional installation",
      fullDescription: "All our technicians are certified professionals with years of experience in auto glass repair and replacement."
    },
    {
      image: buyNowPayLaterImage,
      title: "Buy now, pay later",
      shortDescription: "Flexible financing",
      fullDescription: "Flexible payment options available. Get your windshield replaced today and pay over time with our financing solutions."
    },
    {
      image: competitivePricesImage,
      title: "Competitive cash prices",
      shortDescription: "Fair pricing",
      fullDescription: "We've done the shopping for you for fair, transparent pricing with no hidden fees. We offer competitive rates for customers paying cash or without insurance."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Everything</span> you get
          </h2>
          <p className="text-muted-foreground text-lg">
            Why thousands of customers choose our auto glass services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative h-64 md:h-80 perspective-1000">
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCards[index] ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleFlip(index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 bg-background rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center backface-hidden">
                  <div className="w-full h-24 md:h-32 mb-4 md:mb-6 flex items-center justify-center">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-2 md:mb-4">
                    {benefit.shortDescription}
                  </p>
                  <p className="text-xs text-primary underline">
                    flip for more info
                  </p>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 bg-background rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center backface-hidden rotate-y-180 flex flex-col justify-center"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                    {benefit.fullDescription}
                  </p>
                  <p className="text-xs text-primary underline mt-2 md:mt-4">
                    click to flip back
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
