import { useState } from "react";
import Icon from "@/components/ui/icon";
import Modal from "@/components/ui/modal";

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Домашний уют",
      description: "Панно и композиции для гостиной, спальни, прихожей",
      fullDescription:
        "Преобразите свой дом в оазис спокойствия с нашими панно и композициями из мха, созданными вручную. Эти изделия привносят умиротворяющую энергию природы в ваш интерьер, идеально подходя для гостиных, спален или прихожих. Каждая композиция тщательно разработана, чтобы гармонично сочетаться с эстетикой вашего дома, добавляя нотку естественной элегантности. Будь то яркая зеленая акцентная стена или изящное панно из мха, наши работы создают теплую и уютную атмосферу, способствующую отдыху и комфорту. Выбирайте индивидуальные дизайны, чтобы подчеркнуть ваш стиль, и позвольте природе вдохновлять вас каждый день.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Home",
    },
    {
      title: "Офисное пространство",
      description: "Стены из мха, зеленые зоны для продуктивности",
      fullDescription:
        "Оживите рабочую среду с помощью наших моховых стен и зеленых инсталляций, созданных для повышения продуктивности и благополучия. Эти экологичные композиции привносят свежесть в офисные пространства, от масштабных моховых стен, создающих яркий акцент, до компактных зеленых зон, способствующих концентрации и творчеству. Наши дизайны адаптируются под современные офисы, требуют минимального ухода и отличаются экологичностью. Они не только украшают пространство, но и создают более здоровую и вдохновляющую атмосферу для сотрудников и клиентов. Позвольте природе преобразить ваше рабочее пространство.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Building",
    },
    {
      title: "Рестораны и кафе",
      description: "Создание уютной атмосферы для гостей",
      fullDescription:
        "Создайте незабываемую атмосферу для ваших гостей с нашими уникальными природными композициями. Панно из мха и зеленые акценты разработаны, чтобы обогатить впечатления от посещения ресторанов и кафе, добавляя уюта и природного очарования. От пышных зеленых стен, создающих ощущение спокойствия, до изысканных ботанических элементов, которые вызывают интерес, наши работы идеально дополняют уникальную атмосферу вашего заведения. Эти экологичные и простые в уходе инсталляции сохраняют яркость и гостеприимство пространства, даря посетителям незабываемое погружение в объятия природы во время трапезы.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Coffee",
    },
    {
      title: "Отели и спа",
      description: "Расслабляющие композиции для гостиничного бизнеса",
      fullDescription:
        "Погрузите ваших гостей в атмосферу умиротворения с нашими успокаивающими композициями из мха и природными инсталляциями, созданными специально для отелей и спа. Наши работы привносят целительную силу природы в холлы, номера и зоны релакса, создавая ощущение роскоши и покоя. От элегантных моховых стен, встречающих гостей природной утонченностью, до зеленых акцентов, усиливающих атмосферу спа, наши композиции повышают качество отдыха. Простые в уходе и экологичные, они обеспечивают долговечную красоту пространства, приглашая гостей расслабиться и восстановить связь с природой.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Sparkles",
    },
  ];

  return (
    <section id="product-gallery" className="py-20 bg-white moss-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-moss-700 mb-6">
            Коллекция композиций
          </h2>
          <p className="text-xl text-moss-600 max-w-3xl mx-auto">
            От уютных домашних панно до впечатляющих корпоративных инсталляций —
            создаем природную гармонию для любого пространства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <Icon
                    name={product.icon}
                    size={24}
                    className="text-moss-600"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-montserrat font-semibold text-moss-700 mb-3">
                  {product.title}
                </h3>
                <p className="text-moss-600 mb-6">{product.description}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-moss-500 hover:bg-moss-600 text-white py-3 rounded-full font-montserrat font-medium transition-colors duration-300"
                >
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-moss-500 rounded-full flex items-center justify-center mr-4">
                <Icon
                  name={selectedProduct.icon}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-moss-700">
                {selectedProduct.title}
              </h3>
            </div>
            <p className="text-moss-600 leading-relaxed">
              {selectedProduct.fullDescription}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProductGallery;
