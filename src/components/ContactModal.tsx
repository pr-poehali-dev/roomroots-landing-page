import Icon from "@/components/ui/icon";

const ContactModal = () => {
  return (
    <div>
      <h3 className="text-2xl font-montserrat font-semibold mb-6 text-moss-700">
        Связаться с нами
      </h3>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="w-full border border-moss-300 rounded-xl px-4 py-3 text-moss-700 placeholder-moss-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="w-full border border-moss-300 rounded-xl px-4 py-3 text-moss-700 placeholder-moss-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Чего желаете?"
            rows={4}
            className="w-full border border-moss-300 rounded-xl px-4 py-3 text-moss-700 placeholder-moss-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target.closest("form"));
            const name = formData.get("name");
            const phone = formData.get("phone");
            const message = formData.get("message");
            const subject = `Заявка с сайта от ${name}`;
            const body = `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
            window.location.href = `mailto:ilyaN445@yandex.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-montserrat font-medium text-lg transition-colors duration-300"
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default ContactModal;
