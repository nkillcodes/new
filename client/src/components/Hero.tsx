import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Trophy, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                National Level
              </span>
              <br />
              <span className="text-foreground">Cybersecurity CTF 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Test your cybersecurity skills in the ultimate National Level CTF Competition. 
              Join students nationwide in this thrilling two-phase cybersecurity challenge.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-cyber transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open('#register', '_blank')}
            >
              Register for CTF
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <Calendar className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Online Qualifiers</h3>
              <p className="text-muted-foreground">Sept 19-20, 2025</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <Clock className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Grand Finale</h3>
              <p className="text-muted-foreground">Sept 26, 2025</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Top Teams</h3>
              <p className="text-muted-foreground">Top 10 Qualify</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <Trophy className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Prize Pool</h3>
              <p className="text-muted-foreground">₹50,000+</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;