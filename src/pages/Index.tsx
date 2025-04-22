
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  );
};

export default Index;
