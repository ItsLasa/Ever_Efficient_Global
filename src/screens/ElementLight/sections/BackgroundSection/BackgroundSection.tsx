import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion"

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Kumara Sahan",
    role: "Business Owner",
    quote:
      "\"What sets Ever Efficient apart is their strategic approach. They don't just execute tasks",
    image: "/kumara-sahan.png",
  },
  {
    id: 2,
    name: "Rajiv Fernando",
    role: "Business Owner",
    quote:
      '"Ever Efficient transformed our online presence completely. Our website traffic increased',
    image: "/rajiv-fernando.png",
  },
  {
    id: 3,
    name: "Priyanka De Silva",
    role: "Business Owner",
    quote:
      '"Their social media strategy took our engagement from 200 to 15,000+ followers in one',
    image: "/priyanka-de-silva.png",
  },
  {
    id: 4,
    name: "Dinesh Perera",
    role: "Business Owner",
    quote:
      '"The professional photography and video content they created became the cornerstone of o',
    image: "/dinesh-perera.png",
  },
];

export const BackgroundSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center py-[30px] bg-everefficientlkprussian-blue-85 bg-[url(..//background.png)] bg-cover bg-center">
      <div className="relative max-w-[1200px] w-full h-auto py-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-[245px] h-5 mb-6 border-b-2 border-[#275ba8]">
            <img
              className="absolute w-6 h-[21px] -top-1 left-0"
              alt="Component"
              src="/component-1-16.svg"
            />
            <div className="absolute w-[221px] h-[33px] -top-2.5 left-6 font-everefficient-lk-inter-bold-upper font-[number:var(--everefficient-lk-inter-bold-upper-font-weight)] text-everefficientlkcerulean-blue text-[length:var(--everefficient-lk-inter-bold-upper-font-size)] text-center tracking-[var(--everefficient-lk-inter-bold-upper-letter-spacing)] leading-[var(--everefficient-lk-inter-bold-upper-line-height)] whitespace-nowrap [font-style:var(--everefficient-lk-inter-bold-upper-font-style)]">
              CLIENT SUCCESS
            </div>
          </div>

          <h2 className="text-[50.2px] text-center font-['Inter',Helvetica] font-normal mb-6">
            <span className="text-white leading-[55px]">What Our Clients </span>
            <span className="text-[#275ba8] leading-[55px]">Say</span>
          </h2>

          <p className="text-everefficientlkwhite text-[14.9px] text-center leading-[28.8px] max-w-[551px] font-['Inter',Helvetica] font-normal">
            Hear how we've helped businesses achieve digital transformation and
            growth.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="flex justify-center gap-[22px] w-full py-1.5">
          {testimonials.map((testimonial) => (
            <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card
              key={testimonial.id}
              className="w-[274.5px] h-[280.98px] bg-everefficientlkwhite rounded-[40px_40px_40px_0px] border-b-[5px] border-[#275ba8] relative"
            >
              <CardContent className="p-0">
                {/* Star rating */}
                <div className="flex mt-[29px] ml-[25px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className="w-[18px] h-4 mr-[4px]"
                      alt="Star rating"
                      src="/component-1.svg"
                    />
                  ))}
                </div>
          
                {/* Testimonial text */}
                <div className="w-56 h-[86px] mt-4 ml-[25px]">
                  <div className="relative w-[220px] h-[87px]">
                    <p className="text-everefficientlkslate-gray text-[14.8px] leading-[28.8px] font-everefficient-lk-inter-medium-italic font-[number:var(--everefficient-lk-inter-medium-italic-font-weight)] tracking-[var(--everefficient-lk-inter-medium-italic-letter-spacing)] [font-style:var(--everefficient-lk-inter-medium-italic-font-style)]">
                      {testimonial.quote}
                    </p>
                    <img
                      className="absolute bottom-0 right-0 w-4 h-4"
                      alt="More"
                      src="/component-1-18.svg"
                    />
                  </div>
                </div>
          
                {/* Profile section */}
                <div className="flex items-center mt-4 ml-[25px]">
                  <div className="flex flex-col w-[75px] items-start p-1.5 rounded-[50px] border-2 border-dashed border-[#275ba8]">
                    <div
                      className="w-full h-[63px] rounded-[31.5px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                  </div>
                  <div className="ml-[10px]">
                    <h3 className="text-everefficientlkmirage text-[19.2px] font-normal font-['Inter',Helvetica]">
                      {testimonial.name}
                    </h3>
                    <p className="text-everefficientlkcerulean-blue font-everefficient-lk-inter-medium font-[number:var(--everefficient-lk-inter-medium-font-weight)] text-[length:var(--everefficient-lk-inter-medium-font-size)] tracking-[var(--everefficient-lk-inter-medium-letter-spacing)] leading-[var(--everefficient-lk-inter-medium-line-height)] [font-style:var(--everefficient-lk-inter-medium-font-style)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
          
                {/* Quote icon */}
                <div className="absolute top-0 right-[30px] flex flex-col w-10 h-10 items-start pl-[6.88px] pr-[6.87px] pt-px pb-2 bg-everefficientlkcerulean-blue rounded-[50px_50px_50px_0px]">
                  <img
                    className="w-[26.25px] h-[31px]"
                    alt="Quote icon"
                    src="/component-1-21.svg"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
