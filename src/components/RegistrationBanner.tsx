import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const RegistrationBanner = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const deadline = new Date("2024-03-10T23:59:59");
    
    const updateTimer = () => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Registration Closed");
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-warning-orange/20 via-destructive/20 to-warning-orange/20 border border-warning-orange/30 sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-warning-orange animate-pulse" />
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground">Registration Deadline: March 10, 2024</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Time remaining: {timeLeft}</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="default"
            className="bg-warning-orange hover:bg-warning-orange/90 text-background font-semibold px-6 py-2 animate-pulse hover:animate-none transition-all duration-300"
            onClick={() => window.open('#register', '_blank')}
          >
            Register Before Deadline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBanner;