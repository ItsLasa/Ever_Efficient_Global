import SpiderWeb from "../../../../components/ui/SpiderWeb";

export const ContactSection = (): JSX.Element => {
  return (
    <div className="relative w-full bg-everefficientlkwhite">
      <section className="relative w-full h-[400px] bg-black overflow-hidden flex items-center justify-center">
        <a href="#about" className="absolute inset-0 z-0 block">
          {/* <div className="flex w-full h-full">
            <SpiderWeb />
          </div> */}
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

      <div className="grid gap-6 px-6 py-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="py-6 text-center transition duration-500 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-300 animate-fade-in-up group">
          <div className="flex items-center justify-center mx-auto text-4xl rounded-full w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:animate-pulse">
            🏢
          </div>
          <h3 className="mt-4 text-lg font-semibold">Office Address</h3>
          <p className="mt-1 text-sm text-gray-600">
            No.15/1/C, 2nd Floor, Edirisinghe Tower,
            <br />
            New Digana Road, Kundasale, Kandy
          </p>
        </div>

        {/* Card 2 */}
        <div className="py-6 text-center transition duration-500 delay-100 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-green-300 animate-fade-in-up group">
          <div className="flex items-center justify-center mx-auto text-4xl rounded-full w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 group-hover:animate-pulse">
            📞
          </div>
          <h3 className="mt-4 text-lg font-semibold">Call Us</h3>
          <p className="mt-1 text-sm text-gray-600">+94 777 644 590</p>
        </div>

        {/* Card 3 */}
        <div className="py-6 text-center transition duration-500 delay-200 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-pink-300 animate-fade-in-up group">
          <div className="flex items-center justify-center mx-auto text-4xl rounded-full w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 group-hover:animate-pulse">
            ✉️
          </div>
          <h3 className="mt-4 text-lg font-semibold">Email Us</h3>
          <p className="mt-1 text-sm text-gray-600">
            everefficient.official@gmail.com
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-50">
        <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-xl rounded-2xl md:grid-cols-2">
          {/* Left Image Section */}
          <div className="flex items-center justify-center bg-gray-100">
            <img
              src="/about-bg5.jpg"
              alt="Office"
              className="object-cover w-full h-full max-h-[700px] rounded-none md:rounded-l-2xl"
            />
          </div>

          {/* Right Contact Form */}
          <div className="p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              We’d love to hear from you! Fill out the form below and we'll get
              back to you soon.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Send Message
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
};
