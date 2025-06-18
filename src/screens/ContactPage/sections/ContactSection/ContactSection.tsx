import SpiderWeb from "../../../../components/ui/SpiderWeb";

export const ContactSection = (): JSX.Element => {
  return (
    <div className="relative w-full bg-everefficientlkwhite">
      <section className="relative w-full h-[400px] bg-black overflow-hidden flex items-center justify-center">
        <a href="#about" className="absolute inset-0 z-0 block">
          <div className="flex w-full h-full">
            <SpiderWeb />
          </div>
        </a>
        <div className="relative z-10 text-center px-3 max-w-[1200px]">
          <h1 className="text-everefficientlkwhite font-everefficient-lk-semantic-heading-2-title text-[40.25px] leading-[45px] font-bold">
            Contact Us
          </h1>
          <div className="mt-4 flex items-center justify-center gap-[29.45px]">
            <div className="flex items-center">
              <a
                className="text-everefficientlkwhite font-everefficient-lk-inter-medium-title whitespace-nowrap"
                href="https://everefficient.lk/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
              <img
                className="w-4 h-[28.8px] ml-2"
                alt="Separator"
                src="/component-1-2-8.svg"
              />
            </div>
            <span className="text-everefficientlkcerulean-blue font-everefficient-lk-semantic-item-title whitespace-nowrap">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6 px-6 py-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md text-center py-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-300 animate-fade-in-up group">
          <div className="text-4xl w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-full group-hover:animate-pulse">
            🏢
          </div>
          <h3 className="font-semibold text-lg mt-4">Office Address</h3>
          <p className="text-sm mt-1 text-gray-600">
            No.15/1/C, 2nd Floor, Edirisinghe Tower,<br />
            New Digana Road, Kundasale, Kandy
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md text-center py-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-green-300 animate-fade-in-up group delay-100">
          <div className="text-4xl w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 rounded-full group-hover:animate-pulse">
            📞
          </div>
          <h3 className="font-semibold text-lg mt-4">Call Us</h3>
          <p className="text-sm mt-1 text-gray-600">+94 777 644 590</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md text-center py-6 rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-pink-300 animate-fade-in-up group delay-200">
          <div className="text-4xl w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 rounded-full group-hover:animate-pulse">
            ✉️
          </div>
          <h3 className="font-semibold text-lg mt-4">Email Us</h3>
          <p className="text-sm mt-1 text-gray-600">everefficient.official@gmail.com</p>
        </div>
      </div>

      <div className="p-3 justify-center items-center">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6">
          <div className="flex md:basis-[50%] justify-center items-center">
            <img
              src="/about-bg5.jpg"
              alt="Office"
              className="rounded-xl w-full max-w-[400px] h-full max-h-[700px] object-cover"
            />
          </div>
          <div className="w-full p-6 rounded-xl shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4">
              Get in touch with us for any inquiries or support
            </p>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <textarea
                rows={4}
                placeholder="Write Your Message"
                className="w-full border px-3 py-2 rounded text-sm"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.70539195056!2d80.66264422768067!3d7.29454365868474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366da4d7b2097%3A0x1f3e1102cf7aa2b5!2sKundasale!5e0!3m2!1sen!2slk!4v1718698000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}