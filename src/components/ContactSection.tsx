import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-moss-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-azure-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-ochre-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Создадим природную гармонию в вашем пространстве
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Свяжитесь с нами для консультации и создания уникальной
              композиции, которая преобразит ваш интерьер
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-medium">
                    +7 (123) 456-78-90
                  </p>
                  <p className="text-sm opacity-80">Звоните с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-azure-500 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-medium">
                    hello@roomroots.ru
                  </p>
                  <p className="text-sm opacity-80">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ochre-500 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-medium">
                    Петрозаводск, Карелия
                  </p>
                  <p className="text-sm opacity-80">Работаем по всей России</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 animate-scale-in">
            <h3 className="text-2xl font-montserrat font-semibold mb-6">
              Получить консультацию
            </h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-montserrat font-medium text-lg transition-colors duration-300"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
