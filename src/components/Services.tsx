import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "🚗",
      title: "Windshield Replacement",
      description: "Complete windshield replacement with OEM-quality glass and perfect seal installation.",
      features: ["OEM & OEE Glass", "Mobile Service", "Same Day Service", "Lifetime Warranty"]
    },
    {
      icon: "🔧",
      title: "ADAS Calibration",
      description: "Advanced Driver Assistance Systems calibration for modern vehicles with safety sensors.",
      features: ["Camera Calibration", "Radar Alignment", "Lane Keep Assist", "Collision Warning"]
    },
    {
      icon: "📱",
      title: "Mobile Service",
      description: "We come to you! Professional auto glass service at your home or office.",
      features: ["Free Mobile Service", "Convenient Scheduling", "Professional Equipment", "Insurance Direct"]
    },
    {
      icon: "⚡",
      title: "Emergency Repair",
      description: "24/7 emergency auto glass repair and replacement service when you need it most.",
      features: ["24/7 Emergency", "Rapid Response", "Temporary Solutions", "Safety Priority"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need for your{" "}
            <span className="text-primary">auto glass</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From windshield replacement to advanced calibration, we handle it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
