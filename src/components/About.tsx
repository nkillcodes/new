import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Participants Expected" },
    { icon: <Target className="h-8 w-8" />, number: "50+", label: "Challenges" },
    { icon: <Award className="h-8 w-8" />, number: "$5,000", label: "Prize Pool" },
    { icon: <BookOpen className="h-8 w-8" />, number: "6", label: "Categories" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">ACM CTF</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The ACM Student Chapter presents the annual Capture The Flag competition, 
              bringing together the brightest cybersecurity minds from colleges nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">What is CTF?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Capture The Flag (CTF) is a cybersecurity competition where participants solve 
                  security-related challenges to find hidden "flags" - special text strings that 
                  prove you've successfully completed a challenge.
                </p>
                <p>
                  These competitions test various skills including cryptography, web exploitation, 
                  reverse engineering, forensics, and more. It's a practical way to learn 
                  cybersecurity concepts in a hands-on, competitive environment.
                </p>
                <p>
                  Whether you're a beginner or an experienced security enthusiast, our CTF offers 
                  challenges for all skill levels with comprehensive learning opportunities.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Why Participate?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Skill Development</h4>
                    <p className="text-muted-foreground">Enhance your cybersecurity knowledge through practical challenges</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Career Opportunities</h4>
                    <p className="text-muted-foreground">Network with industry professionals and potential employers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Recognition & Prizes</h4>
                    <p className="text-muted-foreground">Win cash prizes, certificates, and industry recognition</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Team Building</h4>
                    <p className="text-muted-foreground">Collaborate with peers and build lasting professional relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-border/50 p-8">
              <h3 className="text-2xl font-bold mb-4">Organized by ACM Student Chapter</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The Association for Computing Machinery (ACM) Student Chapter is committed to advancing 
                computing education and fostering the next generation of cybersecurity professionals. 
                Our annual CTF competition is part of our mission to provide practical learning 
                experiences and connect students with industry opportunities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;