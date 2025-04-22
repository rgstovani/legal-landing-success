
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      text: "O Dr. João foi fundamental na resolução do meu caso trabalhista. Profissional extremamente competente e atencioso.",
      role: "Analista Administrativa"
    },
    {
      name: "Carlos Oliveira",
      text: "Excelente atendimento e resultado positivo na minha causa. Recomendo fortemente os serviços do Dr. João.",
      role: "Vendedor"
    },
    {
      name: "Ana Paula",
      text: "Consegui receber todos os meus direitos graças ao trabalho excepcional realizado. Muito obrigada!",
      role: "Assistente Financeira"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1F2C] mb-12">
          O Que Dizem Nossos Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-[#1A1F2C]">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
