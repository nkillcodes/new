import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, Trophy, AlertTriangle, CheckCircle, CreditCard } from "lucide-react";

const Rules = () => {
  const mainRules = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Size",
      description: "Solo participation or teams of 2-4 members (to be decided)"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Registration Fee",
      description: "Participants must pay ₹400 registration fee before the deadline"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Online Qualifier",
      description: "24-hour format (teams can participate remotely)"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Grand Finale",
      description: "Top 10 teams from Qualifiers advance to the Offline Grand Finale"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fair Play",
      description: "Use of unauthorized tools, scripts, or unethical practices will result in disqualification"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Final Authority",
      description: "Decisions by organizers/judges are final"
    }
  ];

  return (
    <section id="rules" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">📜 Rules</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read and understand all competition rules before participating. 
              Violation of any rules may result in disqualification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainRules.map((rule, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300" data-testid={`rule-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      {rule.icon}
                    </div>
                    <CardTitle className="text-lg">{rule.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{rule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competition Format */}
          <Card className="bg-gradient-card border-border/50 p-8 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Competition Format</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Online Qualifiers</h4>
                <p className="text-muted-foreground">24-hour remote competition</p>
                <p className="text-muted-foreground">September 19-20, 2025</p>
              </div>
              <div className="text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Offline Grand Finale</h4>
                <p className="text-muted-foreground">8-hour onsite competition</p>
                <p className="text-muted-foreground">September 26, 2025</p>
              </div>
            </div>
          </Card>

          {/* Important Notice */}
          <Card className="bg-gradient-card border-destructive/30 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-destructive mb-2">Important Notice</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Registration deadline must be met to participate</li>
                  <li>• Only registered and fee-paid participants can compete</li>
                  <li>• All participants must follow ethical hacking guidelines</li>
                  <li>• Any form of cheating will lead to immediate disqualification</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rules;