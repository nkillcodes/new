import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, IndianRupee } from "lucide-react";

const RegistrationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-warning-orange/20 via-destructive/20 to-warning-orange/20 border border-warning-orange/30 sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-warning-orange animate-pulse" />
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground">Registration Open - Fee: ₹400 per team</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <IndianRupee className="h-4 w-4" />
                <span>Prizes worth ₹50,000 | September 19-26, 2025</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="default"
            className="bg-warning-orange hover:bg-warning-orange/90 text-background font-semibold px-6 py-2 animate-pulse hover:animate-none transition-all duration-300"
            onClick={() => window.open('https://forms.google.com/register-ctf', '_blank')}
            data-testid="banner-register-button"
          >
            Register Now - Pay ₹400
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBanner;