import Icon from "@/components/ui/icon";

const ProductGallery = () => {
  const products = [
    {
      title: "Домашний уют",
      description: "Панно и композиции для гостиной, спальни, прихожей",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Home",
    },
    {
      title: "Офисное пространство",
      description: "Стены из мха, зеленые зоны для продуктивности",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Building",
    },
    {
      title: "Рестораны и кафе",
      description: "Атмосферные композиции для гостеприимства",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Coffee",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
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
                <button className="w-full bg-moss-500 hover:bg-moss-600 text-white py-3 rounded-full font-montserrat font-medium transition-colors duration-300">
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
