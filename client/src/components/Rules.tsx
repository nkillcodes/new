import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, Trophy, AlertTriangle, CheckCircle } from "lucide-react";

const Rules = () => {
  const ruleCategories = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Formation",
      rules: [
        "Teams can have 1-4 members maximum",
        "All team members must be currently enrolled college students",
        "Mixed teams from different colleges are allowed",
        "Individual participation is welcome",
        "Team registration must be completed before the deadline"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Competition Format",
      rules: [
        "24-hour continuous competition period",
        "Jeopardy-style CTF with multiple categories",
        "Challenges unlock progressively based on difficulty",
        "Real-time leaderboard updates",
        "No breaks or pauses during the competition"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fair Play",
      rules: [
        "No collaboration between different teams",
        "No sharing of flags or solutions",
        "No attacking competition infrastructure",
        "No DoS attacks on challenge servers",
        "Use only provided resources and public information"
      ]
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Scoring & Winning",
      rules: [
        "Points awarded based on challenge difficulty",
        "First team to solve gets full points",
        "Hint usage reduces available points",
        "Final rankings based on total points and solve time",
        "Tiebreaker: earliest submission time"
      ]
    }
  ];

  const prohibitions = [
    "Brute force attacks on challenge platforms",
    "Attempting to hack competition infrastructure", 
    "Sharing solutions or flags with other teams",
    "Using automated tools against challenge servers",
    "Reverse engineering the scoring system"
  ];

  const guidelines = [
    "Read challenge descriptions carefully",
    "Ask organizers if challenge instructions are unclear",
    "Report technical issues immediately",
    "Keep your submission attempts reasonable",
    "Have fun and learn from each challenge!"
  ];

  return (
    <section id="rules" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Competition <span className="bg-gradient-primary bg-clip-text text-transparent">Rules</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read and understand all rules before participating. Fair play ensures 
              everyone has an equal opportunity to showcase their skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {ruleCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-destructive/30 hover:shadow-glow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                  Strictly Prohibited
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {prohibitions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-sm text-destructive font-medium">
                    Violation of these rules will result in immediate disqualification.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <CheckCircle className="h-6 w-6" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {guidelines.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    Following these guidelines enhances your competition experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-card border-border/50 p-8">
              <h3 className="text-2xl font-bold mb-4">Flag Format</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <Badge variant="outline" className="text-lg px-4 py-2 font-mono">
                  ACM{"{example_flag_here}"}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                All flags follow the format <span className="font-mono text-primary">ACM{"{"}</span>
                <span className="font-mono text-accent">flag_content</span>
                <span className="font-mono text-primary">{"}"}</span>. 
                Flags are case-sensitive and must be submitted exactly as found.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;