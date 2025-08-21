import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Globe, Code, Search, Puzzle, Shield } from "lucide-react";

const CTFEvent = () => {
  const categories = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cryptography",
      description: "Decode encrypted messages and break cipher algorithms",
      difficulty: "Medium",
      points: "100-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Exploitation",
      description: "Find vulnerabilities in web applications and services",
      difficulty: "Easy",
      points: "50-300"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Binary Exploitation",
      description: "Exploit memory corruption vulnerabilities",
      difficulty: "Hard",
      points: "200-800"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Forensics",
      description: "Analyze digital evidence and recover hidden data",
      difficulty: "Medium",
      points: "100-400"
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Reverse Engineering",
      description: "Analyze and understand compiled programs",
      difficulty: "Hard",
      points: "150-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Miscellaneous",
      description: "Various security challenges and brain teasers",
      difficulty: "Mixed",
      points: "50-400"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-primary/20 text-primary";
      case "Medium": return "bg-warning-orange/20 text-warning-orange";
      case "Hard": return "bg-destructive/20 text-destructive";
      default: return "bg-accent/20 text-accent";
    }
  };

  return (
    <section id="ctf-event" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Challenge Categories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test your skills across multiple cybersecurity domains. Each category offers unique challenges 
            designed to push your knowledge and problem-solving abilities to the limit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full text-primary group-hover:text-cyber-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge className={getDifficultyColor(category.difficulty)}>
                    {category.difficulty}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30">
                    {category.points} pts
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Event Format</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">Jeopardy Style</h4>
                <p className="text-muted-foreground">Choose challenges from different categories with varying point values.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Real-time Scoring</h4>
                <p className="text-muted-foreground">Live leaderboard updates as teams submit correct flags.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Hint System</h4>
                <p className="text-muted-foreground">Get hints for challenging problems, but they'll cost you points!</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTFEvent;