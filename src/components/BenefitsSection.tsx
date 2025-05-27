import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "100% экологично",
      description:
        "Натуральные материалы сохраняют свежий вид годами без ухода",
    },
    {
      icon: "Wind",
      title: "Минимальный уход",
      description: "Не требует регулярного полива и сложного обслуживания",
    },
    {
      icon: "Heart",
      title: "Здоровье и спокойствие",
      description: "Зеленые композиции снижают стресс и повышают концентрацию",
    },
    {
      icon: "Sparkles",
      title: "Уникальный дизайн",
      description:
        "Каждая композиция создается индивидуально под ваше пространство",
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Материалы заготавливаются с заботой о природе Карелии",
    },
    {
      icon: "Palette",
      title: "Естественная красота",
      description: "Природные текстуры и оттенки создают гармоничную атмосферу",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-moss-50 to-emerald-50 moss-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-moss-700 mb-6">
            А вы знаете, что наши композиции - это
          </h2>
          <p className="text-xl text-moss-600 max-w-3xl mx-auto">
            Почему стабилизированный мох и цетрария — идеальное решение для
            современных интерьеров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-moss-600 rounded-2xl flex items-center justify-center mb-6">
                <Icon name={benefit.icon} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-montserrat font-semibold text-moss-700 mb-4">
                {benefit.title}
              </h3>

              <p className="text-moss-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
