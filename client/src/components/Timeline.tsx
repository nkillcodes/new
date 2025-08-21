import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "August 1",
      time: "00:00",
      title: "Registration Opens",
      description: "Team registration begins for National Level CTF Competition.",
      icon: <Users className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 1",
      time: "18:00",
      title: "Registration Workshop",
      description: "Learn about CTF basics, categories, and team formation strategies.",
      icon: <MapPin className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 15",
      time: "23:59",
      title: "Registration Deadline",
      description: "Final deadline for team registration and qualification.",
      icon: <Calendar className="h-5 w-5" />,
      status: "critical"
    },
    {
      date: "September 19",
      time: "00:00",
      title: "Online Qualifiers Begin",
      description: "24-hour online qualification round starts. All registered teams participate.",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 20",
      time: "23:59",
      title: "Online Qualifiers End",
      description: "24-hour online qualification round concludes. Top 10 teams advance.",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 22",
      time: "18:00",
      title: "Qualifier Results",
      description: "Top 10 teams announced for the offline grand finale.",
      icon: <Users className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 26",
      time: "09:00",
      title: "Grand Finale",
      description: "8-hour offline competition for top 10 teams. Final challenge begins!",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 26",
      time: "18:00",
      title: "Results & Awards",
      description: "Winner announcement, prize distribution worth ₹50,000, and closing ceremony.",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-primary/20 text-primary";
      case "critical": return "bg-destructive/20 text-destructive";
      case "upcoming": return "bg-accent/20 text-accent";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "critical": return "Deadline";
      case "upcoming": return "Upcoming";
      default: return "TBD";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="bg-gradient-primary bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with all important dates and deadlines. Mark your calendar 
              and don't miss any critical milestones.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-card border-2 border-border rounded-full flex items-center justify-center text-primary">
                      {event.icon}
                    </div>
                  </div>

                  {/* Event content */}
                  <Card className="flex-1 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </span>
                          </div>
                        </div>
                        <Badge className={getStatusColor(event.status)}>
                          {getStatusLabel(event.status)}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border/50 text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">48</div>
              <div className="text-muted-foreground">Hours Total Event</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">24</div>
              <div className="text-muted-foreground">Hours Competition</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 text-center p-6">
              <div className="text-3xl font-bold text-cyber-blue mb-2">6</div>
              <div className="text-muted-foreground">Challenge Categories</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;