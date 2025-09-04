const InsurancePartners = () => {
  const insuranceData = [
    {
      percentage: "37%",
      companies: "Progressive, State Farm, Geico",
      size: "large"
    },
    {
      percentage: "21%",
      companies: "Allstate, USAA",
      size: "medium"
    },
    {
      percentage: "18%",
      companies: "Liberty Mutual, Farmers",
      size: "medium"
    },
    {
      percentage: "14%",
      companies: "Travelers, Root, Lemonade",
      size: "small"
    },
    {
      percentage: "10%",
      companies: "Stillwater, Acuity, Everyone Else",
      size: "small"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Insured? We'll help you <span className="text-primary">save money</span>!
        </h2>
        <p className="text-muted-foreground text-lg mb-16">
          Insurance companies our customers use for auto glass coverage:
        </p>
        
        <div className="relative flex justify-center items-center mb-12 h-96">
          {insuranceData.map((item, index) => {
            const mobilePositions = [
              'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', // Center
              'top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2', // Top left - more spaced
              'top-[15%] left-[75%] -translate-x-1/2 -translate-y-1/2', // Top right - more spaced
              'top-[85%] left-[20%] -translate-x-1/2 -translate-y-1/2', // Bottom left - more spaced
              'top-[85%] left-[80%] -translate-x-1/2 -translate-y-1/2'  // Bottom right - more spaced
            ];
            
            const desktopPositions = [
              'md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2', // Center
              'md:top-[20%] md:left-[35%] md:-translate-x-1/2 md:-translate-y-1/2', // Top left
              'md:top-[20%] md:left-[65%] md:-translate-x-1/2 md:-translate-y-1/2', // Top right
              'md:top-[75%] md:left-[30%] md:-translate-x-1/2 md:-translate-y-1/2', // Bottom left
              'md:top-[75%] md:left-[70%] md:-translate-x-1/2 md:-translate-y-1/2'  // Bottom right
            ];
            
            return (
              <div 
                key={index} 
                className={`absolute ${mobilePositions[index]} ${desktopPositions[index]}`}
              >
                <div className={`rounded-full bg-muted/60 flex flex-col items-center justify-center ${
                  item.size === 'large' ? 'w-56 h-56' : 
                  item.size === 'medium' ? 'w-40 h-40' : 
                  'w-32 h-32'
                }`}>
                  <div className={`font-bold text-foreground ${
                    item.size === 'large' ? 'text-5xl md:text-6xl' : 
                    item.size === 'medium' ? 'text-3xl md:text-4xl' : 
                    'text-2xl md:text-3xl'
                  }`}>
                    {item.percentage}
                  </div>
                  <div className={`text-muted-foreground text-center leading-tight ${
                    item.size === 'large' ? 'text-sm px-6' : 
                    item.size === 'medium' ? 'text-xs px-3' : 
                    'text-xs px-2'
                  }`}>
                    {item.companies}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            Many people aren't aware that auto glass is a "NO FAULT" claim, meaning you can get your insurance to cover the costs WITHOUT increasing your premiums
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xs font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            SEE IF MY SERVICE IS COVERED
          </button>
          <p className="text-sm text-muted-foreground mt-2">(or at least cheaper)</p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
