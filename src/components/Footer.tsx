import { Shield, Mail, MessageCircle, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "#", label: "Discord" }
  ];

  const quickLinks = [
    { name: "About ACM", href: "#about" },
    { name: "Competition Rules", href: "#rules" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" }
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "ctf@acm-chapter.org" },
    { icon: <MessageCircle className="h-5 w-5" />, text: "Discord: ACM CTF 2024" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ACM CTF 2024
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join the ultimate cybersecurity competition for college students. 
              Test your skills, learn new techniques, and compete for amazing prizes 
              in this 24-hour Capture The Flag challenge.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  {contact.icon}
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button 
                className="bg-gradient-primary hover:shadow-glow-cyber transition-all duration-300 w-full"
                onClick={() => window.open('#register', '_blank')}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 ACM Student Chapter. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;