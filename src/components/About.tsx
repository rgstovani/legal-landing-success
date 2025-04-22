
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C]">
              Dr. João Silva
            </h2>
            <p className="text-gray-600">OAB/SP 123.456</p>
            <p className="text-lg text-gray-700">
              Com mais de uma década de experiência em direito trabalhista, 
              auxiliamos trabalhadores a garantir seus direitos e benefícios.
            </p>
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
