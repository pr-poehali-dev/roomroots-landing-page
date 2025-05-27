import { useState } from "react";
import Icon from "@/components/ui/icon";
import Modal from "@/components/ui/modal";
import ContactModal from "@/components/ContactModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden moss-texture">
      <div className="absolute inset-0 nature-gradient opacity-95"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Room<span className="text-emerald-300">Roots</span>
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
            Природная эстетика Карелии в вашем пространстве
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Создаем уникальные композиции из исландской цетрарии и
            стабилизированного мха для дома, офиса и всего где душе это угодно!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={() =>
              document
                .getElementById("product-gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-montserrat font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Посмотреть коллекцию
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-white text-white hover:bg-white hover:text-moss-600 px-8 py-4 rounded-full font-montserrat font-medium text-lg transition-all duration-300"
          >
            Уже хочу!
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://t.me/RoomRootsRR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
          >
            <Icon name="Send" size={20} className="text-white" />
          </a>
          <a
            href="https://vk.com"
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.815-1.49.302 0 .346-.06.66-.66.66-2.573 0-4.543-1.57-6.229-4.015C5.687 9.756 4.754 7.621 5.687 7.621c.346 0 .66.184.66.525 0 .184.123.346.184.525.815 2.05 2.05 3.815 2.573 3.815.184 0 .346-.123.346-.525 0-.66-.184-2.05-.525-3.235-.184-.66-.123-.815.184-.815.66 0 1.49.815 2.05 1.49.66.815 1.49 2.05 2.05 2.05.346 0 .525-.184.525-.525 0-.346-.184-1.01-.525-1.49-.184-.346-.184-.525.184-.525.66 0 1.744 1.01 2.573 2.05.346.525.66 1.01.66 1.49 0 .346-.184.525-.525.525z" />
            </svg>
          </a>
          <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-50">
            <Icon name="ShoppingBag" size={20} className="text-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Icon name="ChevronDown" size={32} className="opacity-70" />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactModal />
      </Modal>
    </section>
  );
};

export default HeroSection;
