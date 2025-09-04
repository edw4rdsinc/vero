import { Phone, Calendar, Wrench } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Call",
      icon: Phone,
      description: "Contact us for a free quote and soonest availability.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      numberColor: "border-orange-600 text-orange-600"
    },
    {
      number: 2,
      title: "Schedule",
      icon: Calendar,
      description: "We'll come to your location at the time that works best for your schedule.",
      bgColor: "bg-orange-50", 
      iconColor: "text-orange-600",
      numberColor: "border-orange-600 text-orange-600"
    },
    {
      number: 3,
      title: "Repair",
      icon: Wrench,
      description: "Our certified technicians will expertly repair or replace your auto glass on-site.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600", 
      numberColor: "border-orange-600 text-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Auto glass service made simple
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional repair and replacement in just 3 easy steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className={`${step.bgColor} rounded-2xl p-8 h-48 flex flex-col items-center justify-center mb-6`}>
                  <div className={`w-12 h-12 rounded-full border-2 ${step.numberColor} bg-white flex items-center justify-center text-xl font-bold mb-4`}>
                    {step.number}
                  </div>
                  
                  <div className={`w-16 h-16 ${step.iconColor}`}>
                    <IconComponent size={64} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
