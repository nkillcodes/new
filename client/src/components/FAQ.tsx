import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in the CTF?",
      answer: "Any currently enrolled college or university student can participate. You need to provide proof of enrollment during registration. Both undergraduate and graduate students are welcome."
    },
    {
      question: "How do I form a team?",
      answer: "Teams can have 1-4 members. You can register as an individual and we'll help match you with other participants, or register as a complete team. Mixed teams from different colleges are allowed and encouraged."
    },
    {
      question: "What should I bring to the competition?",
      answer: "Bring your laptop with a stable internet connection, chargers, and any development tools you prefer. We'll provide power outlets, WiFi, and basic refreshments. The competition is entirely online, so no special hardware is required."
    },
    {
      question: "Do I need prior CTF experience?",
      answer: "No prior experience is required! We have challenges ranging from beginner to advanced levels. We also provide pre-competition workshops and resources to help newcomers get started."
    },
    {
      question: "What's the registration fee?",
      answer: "Registration is $25 per person for early birds (before March 1) and $35 per person after that. This covers competition materials, refreshments, and administrative costs. Scholarships are available for students who need financial assistance."
    },
    {
      question: "Can I participate remotely?",
      answer: "Yes! This is a hybrid competition. You can participate either in-person at our main venue or remotely from anywhere. Remote participants have access to the same challenges and support as in-person attendees."
    },
    {
      question: "What are the prizes?",
      answer: "We have a $5,000+ prize pool! 1st place receives $2,000, 2nd place gets $1,500, 3rd place gets $1,000, plus additional category-specific prizes and sponsor awards. All participants receive certificates."
    },
    {
      question: "How is scoring calculated?",
      answer: "Points are awarded based on challenge difficulty and solve order. Earlier solves get slightly more points. Using hints reduces the available points for that challenge. The team with the highest total points wins."
    },
    {
      question: "What if I get stuck on a challenge?",
      answer: "Each challenge has a hint system available at the cost of some points. We also have mentors available during the competition to provide guidance without giving away solutions. Our Discord channel is active for general questions."
    },
    {
      question: "When will results be announced?",
      answer: "Preliminary results will be available immediately after the competition ends. Final results, after verification and any appeals, will be announced during the closing ceremony on March 16th at 3:00 PM."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about the competition? Find answers to the most common questions below. 
              Can't find what you're looking for? Reach out to us directly.
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 p-6 mb-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/30 rounded-lg px-4 bg-background/50">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200 py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50 p-6 text-center hover:shadow-glow-accent transition-all duration-300">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Join Our Discord</h3>
              <p className="text-muted-foreground mb-6">
                Connect with other participants, get real-time updates, and ask questions 
                in our active Discord community.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join Discord Server
              </Button>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6 text-center hover:shadow-glow-accent transition-all duration-300">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Email Support</h3>
              <p className="text-muted-foreground mb-6">
                Have a specific question or need direct assistance? 
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Send Email
              </Button>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-card border-border/50 p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team is here to help! Whether you're curious about the competition format, 
                need technical assistance, or want to learn more about sponsorship opportunities, 
                we're just a message away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow-cyber transition-all duration-300">
                  Contact Organizers
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;