
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5544999999999', '_blank');
  };

  return (
    <footer className="bg-[#1A1F2C] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p className="mb-2">Telefone: (11) 9999-9999</p>
            <p className="mb-2">Email: contato@exemplo.com.br</p>
            <p>Endereço: Av. Paulista, 1000 - São Paulo/SP</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário</h3>
            <p className="mb-2">Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 13h</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-gray-300 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="mb-4">&copy; 2024 Dr. João Silva - Todos os direitos reservados</p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg transition-all flex items-center gap-2 mx-auto"
          >
            <Phone className="h-5 w-5" />
            Entre em Contato Agora
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
