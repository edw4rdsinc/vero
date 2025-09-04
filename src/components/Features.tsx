import { Button } from "@/components/ui/button";
import mobileServiceImage from "@/assets/mobile-service-3d.png";
import instantQuoteImage from "@/assets/instant-quote-3d.png";
import qualityCertifiedImage from "@/assets/quality-certified-3d.png";

const Features = () => {
  const features = [
    {
      image: instantQuoteImage,
      title: "Instant accurate quotes",
      description: "Get transparent pricing instantly with our advanced quote system. No hidden fees, no surprises - just honest pricing."
    },
    {
      image: mobileServiceImage,
      title: "Mobile service at your location",
      description: "Get auto glass service anywhere. We come to your home, office, or wherever is most convenient for you."
    },
    {
      image: qualityCertifiedImage,
      title: "Certified quality guarantee",
      description: "All work is performed by certified technicians using OEM-quality glass. Your safety is our top priority."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Fast. <span className="text-primary">Professional</span>. Guaranteed.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-16">
          From assessment to completion
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-64 h-48 mb-6 bg-secondary/5 rounded-2xl flex items-center justify-center p-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Your Quote Now
        </Button>
      </div>
    </section>
  );
};

export default Features;
