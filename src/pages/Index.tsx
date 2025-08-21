import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RegistrationBanner from "@/components/RegistrationBanner";
import CTFEvent from "@/components/CTFEvent";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <RegistrationBanner />
      <main>
        <Hero />
        <CTFEvent />
        <About />
        <Rules />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
