import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 bg-moss-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-moss-700 mb-6">
              О студии RoomRoots
            </h2>
            <p className="text-lg text-moss-600 mb-6 leading-relaxed">
              Мы создаем композиции, вдохновленные дикой природой Карелии —
              краем бескрайних лесов, кристально чистых озер и древних мхов.
            </p>
            <p className="text-lg text-moss-600 mb-8 leading-relaxed">
              Каждая наша работа — это кусочек северной природы, бережно
              сохраненный в стабилизированном мхе и исландской цетрарии. Мы
              верим, что каждое пространство заслуживает прикосновения живой
              природы.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-moss-700">
                    100% экологично
                  </h4>
                  <p className="text-sm text-moss-600">
                    Стабилизированные материалы
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-azure-500 rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-moss-700">
                    Без ухода
                  </h4>
                  <p className="text-sm text-moss-600">
                    Не требует полива и света
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-emerald-400 to-moss-500 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Карельский лес"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ochre-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-azure-500 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
