import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Michael Chen",
      username: "mikec_auto",
      text: "@VERO_Glass was the fastest windshield replacement I've ever experienced. Mobile service came to my office and had me back on the road in 45 minutes! 🚗✨",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      username: "sarahR_drives",
      text: "Why doesn't everyone use @VERO_Glass? Just got my windshield replaced and the calibration was perfect. Professional service at an unbeatable price! #AutoGlass",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      username: "david_tech",
      text: "Incredible! My Tesla's camera calibration was handled perfectly by @VERO_Glass. The advanced driver assistance systems work flawlessly now. Highly recommended! #Tesla #ADAS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Liu",
      username: "jenliu_mobile",
      text: "Always worried about finding quality auto glass service. Just had my first amazing experience with @VERO_Glass. Lightning fast, professional, and they came to me!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="pt-20 pb-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="font-normal">(Almost)</span> 5 Star Auto Glass Company
        </h2>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Hundreds <span className="font-bold underline">like you</span> have given us 4.9 stars and top ratings in safety, quality, and customer service
        </p>
        <div className="flex justify-center items-center gap-2 mb-16">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="star-container w-11 md:w-16 h-11 md:h-16">
              <Star className="star-outline w-11 md:w-16 h-11 md:h-16" />
              <Star 
                className={`star-fill w-11 md:w-16 h-11 md:h-16 ${
                  star <= 4 
                    ? "" 
                    : star === 5 
                    ? "opacity-90" 
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(star - 1) * 0.2}s`
                }}
              />
            </div>
          ))}
          <span className="text-2xl font-bold text-primary ml-2">4.9</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-8">
            {duplicatedReviews.map((review, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl border border-border/20 transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-muted-foreground text-xs">@{review.username}</p>
                  </div>
                </div>
                <p className="text-sm text-left leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
