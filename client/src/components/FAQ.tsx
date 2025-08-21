import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Q1. Who can participate?",
      answer: "Any student or cybersecurity enthusiast from across India can join."
    },
    {
      question: "Q2. Is there a participation fee?",
      answer: "Yes. The registration fee is ₹400 (per team/participant)."
    },
    {
      question: "Q3. What do winners get?",
      answer: "Prizes worth ₹50,000 including:\n🥇 1st Prize: ₹25,000 + CRTP voucher (Altered Security)\n🥈 2nd Prize: ₹15,000 + OffSec training voucher\n🥉 3rd Prize: ₹10,000 + gift vouchers"
    },
    {
      question: "Q4. How do I register?",
      answer: "Via the registration button (link to Google Form / CTFd platform)."
    },
    {
      question: "Q5. How will the event be conducted?",
      answer: "• Online Qualifier (remote)\n• Offline Finale at The NorthCap University"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">❓ FAQ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about the competition? Find answers to the most common questions below. 
              Can't find what you're looking for? Reach out to us directly.
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 p-6 mb-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/30 rounded-lg px-4 bg-background/50" data-testid={`faq-item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200 py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-card border-border/50 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help! Reach out through any of these channels for quick responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('mailto:ctf@thenorthcap.edu', '_blank')}
                  data-testid="button-contact-email"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://discord.gg/ctf-competition', '_blank')}
                  data-testid="button-contact-discord"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discord
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;