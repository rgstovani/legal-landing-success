
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5544999999999', '_blank');
  };

  return (
    <section className="bg-[#1A1F2C] text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Protegendo Seus Direitos Trabalhistas
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
            Especialista em direito trabalhista com mais de 10 anos de experiência.
            Defendendo seus direitos com dedicação e excelência.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg transition-all flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
