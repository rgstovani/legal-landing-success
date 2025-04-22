
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1F2C] mb-8">
          Agende uma Consulta Gratuita
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Preencha o formulário abaixo e entraremos em contato em até 24 horas.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Nome completo"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input
              type="tel"
              placeholder="Telefone/WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Textarea
            placeholder="Descreva seu caso brevemente"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <div className="text-center">
            <Button 
              type="submit"
              className="bg-[#1A1F2C] text-white hover:bg-[#2A4365] px-8 py-6 text-lg"
            >
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
