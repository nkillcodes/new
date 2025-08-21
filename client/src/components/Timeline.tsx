import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Timeline = () => {
  const events = [
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
      date: "September 26",
      time: "09:00",
      title: "Offline Grand Finale",
      description: "8-hour onsite competition for top 10 teams at The NorthCap University.",
      icon: <MapPin className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "September 26",
      time: "18:00",
      title: "Prize Distribution & Networking",
      description: "Winner announcement, prize distribution worth ₹50,000, and networking session.",
      icon: <Users className="h-5 w-5" />,
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-primary/20 text-primary";
      case "critical": return "bg-destructive/20 text-destructive";
      case "upcoming": return "bg-warning-orange/20 text-warning-orange";
      default: return "bg-accent/20 text-accent";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">🗓️ Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our competition schedule. Mark your calendars and don't miss any important dates.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className="relative flex items-start gap-8" data-testid={`timeline-event-${index}`}>
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-card border-2 border-primary">
                    {event.icon}
                  </div>
                  
                  {/* Event content */}
                  <Card className="flex-1 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {event.date} at {event.time}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates Summary */}
          <Card className="mt-16 bg-gradient-card border-border/50 p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Key Dates Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Online Qualifiers</h4>
                <p className="text-muted-foreground">19-20 Sept 2025 (24 hours)</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Offline Grand Finale</h4>
                <p className="text-muted-foreground">26 Sept 2025 (8 hours)</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Prize Distribution</h4>
                <p className="text-muted-foreground">After the finale</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;