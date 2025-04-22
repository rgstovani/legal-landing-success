
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const About = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5544999999999', '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-1ac38bba1ca8" 
                alt="Dr. João Silva" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C]">
                  Dr. João Silva
                </h2>
                <p className="text-gray-600">OAB/SP 123.456</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              Com mais de uma década de experiência em direito trabalhista, 
              auxiliamos trabalhadores a garantir seus direitos e benefícios.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg transition-all flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#1A1F2C]">10+</h3>
              <p className="text-gray-600">Anos de Experiência</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#1A1F2C]">1000+</h3>
              <p className="text-gray-600">Casos Resolvidos</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#1A1F2C]">98%</h3>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#1A1F2C]">24/7</h3>
              <p className="text-gray-600">Suporte</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
