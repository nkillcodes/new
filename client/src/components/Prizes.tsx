import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Gift, Star } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      amount: "₹25,000",
      bonus: "CRTP Voucher from Altered Security",
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      position: "2nd Place", 
      amount: "₹15,000",
      bonus: "OffSec Training Voucher",
      icon: <Award className="h-12 w-12 text-gray-400" />,
      color: "from-gray-400 to-gray-600"
    },
    {
      position: "3rd Place",
      amount: "₹10,000", 
      bonus: "Exclusive Gift Vouchers",
      icon: <Star className="h-12 w-12 text-orange-600" />,
      color: "from-orange-600 to-red-500"
    }
  ];

  const sponsors = [
    {
      name: "Altered Security",
      description: "Premium cybersecurity training and certification provider",
      logo: "🛡️"
    },
    {
      name: "OffSec",
      description: "Leading penetration testing and ethical hacking training",
      logo: "🔐"
    },
    {
      name: "The NorthCap University",
      description: "Host institution and academic partner",
      logo: "🎓"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Prizes & Sponsors
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for prizes worth ₹50,000 plus exclusive training vouchers from leading cybersecurity companies.
          </p>
        </div>

        {/* Prize Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className="relative p-8 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300 text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-5 rounded-lg`} />
              <CardHeader className="relative">
                <div className="flex justify-center mb-4">
                  {prize.icon}
                </div>
                <CardTitle className="text-2xl font-bold">
                  {prize.position}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-3xl font-bold text-primary mb-4">
                  {prize.amount}
                </div>
                <Badge variant="secondary" className="text-sm">
                  + {prize.bonus}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sponsors Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            Our <span className="text-primary">Sponsors & Partners</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300"
              >
                <div className="text-4xl mb-4">{sponsor.logo}</div>
                <h4 className="text-xl font-semibold mb-2">{sponsor.name}</h4>
                <p className="text-muted-foreground text-sm">{sponsor.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-card rounded-lg p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-6">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Gift className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Networking Opportunities</h4>
                <p className="text-muted-foreground text-sm">Connect with industry professionals, mentors, and sponsors</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Star className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Career Opportunities</h4>
                <p className="text-muted-foreground text-sm">Direct recruitment opportunities with partnering companies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Trophy className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Recognition</h4>
                <p className="text-muted-foreground text-sm">National level competition certificate and recognition</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Skill Development</h4>
                <p className="text-muted-foreground text-sm">Hands-on experience in multiple cybersecurity domains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;