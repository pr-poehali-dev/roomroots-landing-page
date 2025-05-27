import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden moss-texture">
      <div className="absolute inset-0 nature-gradient opacity-95"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Room<span className="text-emerald-300">Roots</span>
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
            Природная эстетика Карелии в каждом пространстве
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Создаем уникальные композиции из исландской цетрарии и
            стабилизированного мха для дома, офиса и общественных пространств
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-montserrat font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Посмотреть коллекцию
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-moss-600 px-8 py-4 rounded-full font-montserrat font-medium text-lg transition-all duration-300">
            Заказать консультацию
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Icon name="ChevronDown" size={32} className="opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
