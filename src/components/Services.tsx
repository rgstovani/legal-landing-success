
const Services = () => {
  const services = [
    {
      title: "Rescisão de Contrato",
      description: "Análise e cálculo de verbas rescisórias, contestação de justa causa"
    },
    {
      title: "Assédio Moral",
      description: "Proteção contra discriminação e abusos no ambiente de trabalho"
    },
    {
      title: "Horas Extras",
      description: "Cobrança de horas extras não pagas e banco de horas irregular"
    },
    {
      title: "Benefícios",
      description: "Regularização de FGTS, férias, 13º salário e outros direitos"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1F2C] mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
