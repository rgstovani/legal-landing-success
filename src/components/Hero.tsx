
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
            onClick={scrollToContact}
            className="bg-white text-[#1A1F2C] hover:bg-gray-200 text-lg px-8 py-6 rounded-lg transition-all"
          >
            Agende uma Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
