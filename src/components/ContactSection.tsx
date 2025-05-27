import { useState } from "react";
import Icon from "@/components/ui/icon";
import Modal from "@/components/ui/modal";
import ContactModal from "@/components/ContactModal";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-emerald-500 to-moss-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-azure-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-ochre-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white">
              Создадим природную гармонию вместе!
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Свяжитесь с нами для консультации и создания уникальной
              композиции, которая преобразит ваш интерьер
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-medium text-white">
                    +7 (977) 407-47-14
                  </p>
                  <p className="text-sm text-emerald-100">
                    Звоните с 9:00 до 21:00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={20} className="text-white" />
                </div>
                <div>
                  <a
                    href="https://t.me/RoomRoots_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat font-medium text-white hover:text-emerald-200 transition-colors"
                  >
                    @RoomRoots_bot
                  </a>
                  <p className="text-sm text-emerald-100">
                    Telegram бот для связи
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-medium text-white">
                    Красногорск, Московская область
                  </p>
                  <p className="text-sm text-emerald-100">
                    Работаем по всей России
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-montserrat font-semibold text-white mb-4">
              Готовы преобразить ваше пространство?
            </h3>
            <p className="text-emerald-100 mb-8">
              Получите персональную консультацию и расчет стоимости
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-montserrat font-semibold text-lg hover:bg-emerald-50 transition-colors duration-300"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactModal />
      </Modal>
    </section>
  );
};

export default ContactSection;
