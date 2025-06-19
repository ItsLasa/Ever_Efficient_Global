import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { BackgroundSection } from "./sections/BackgroundSection";
import { ContentSection } from "./sections/ContentSection";
import { DividerSection } from "./sections/DividerSection";
import { FooterSection } from "../../components/ui/FooterSection/FooterSection";
import { HeaderSection } from "../../components/ui/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { OverlapGroupSection } from "./sections/OverlapGroupSection";
import { OverlapSection } from "./sections/OverlapSection";
import { InfiniteSlider } from "../../components/ui/infinite-slider";

export const ElementLight = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  // FAQ data for mapping
  const faqItems = [
    {
      id: "faq-1",
      question:
        "What services does Ever Efficient Business Management (Pvt) Ltd provide?",
      answer: [
        "Web and Mobile Application Development",
        "Custom Software Systems",
        "SEO (Search Engine Optimization)",
        "Digital Marketing Services",
        "Software Maintenance and Support",
        "Business Automation Solutions",
      ],
    },
    {
      id: "faq-2",
      question: "Do you offer custom software development?",
      answer:
        "Yes, we build fully customized software systems tailored to your business needs whether it’s CRM, ERP, inventory, POS, or any other solution.",
    },
    {
      id: "faq-3",
      question: "How experienced is your development team?",
      answer:
        "Our team consists of experienced developers, designers, and project managers with expertise in cutting-edge technologies across web, mobile, and cloud platforms.",
    },
    {
      id: "faq-4",
      question:
        "Can you help with mobile app development for both Android and iOS?",
      answer:
        "Absolutely! We develop cross-platform and native apps that work seamlessly on both Android and iOS devices.",
    },
    {
      id: "faq-5",
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer flexible maintenance plans to ensure your website, app, or system runs smoothly with regular updates and technical support.",
    },
    {
      id: "faq-6",
      question: "What industries do you serve?",
      answer:
        "We have worked with businesses in healthcare, retail, education, logistics, real estate, and more.",
    },
    {
      id: "faq-7",
      question: "How do I get a quote for my project?",
      answer:
        "You can fill out our contact form on the website or reach out to us via email or phone. We’ll schedule a free consultation to understand your requirements and provide a detailed proposal.",
    },
    {
      id: "faq-8",
      question: "What makes your company different?",
      answer:
        "We focus on long-term client relationships, result-driven strategies, and robust technology implementations that improve business efficiency.",
    },
    {
      id: "faq-9",
      question: "Do you offer SEO and digital marketing packages?",
      answer:
        "Yes. We provide comprehensive SEO strategies, content marketing, social media management, PPC advertising, and analytics tracking to help grow your online presence.",
    },
    {
      id: "faq-10",
      question:
        "Where are you located and do you work with international clients?",
      answer:
        "We are based in Kandy, Sri Lanka and proudly serve clients globally through virtual meetings, email, and secure digital platforms.",
    },
  ];

  // Service cards data
  const serviceCards = [
    {
      id: "01",
      title: "Strategic Digital Marketing",
      description:
        "Data-driven campaigns to boost your online presence, drive qualified traffic, and convert leads into customers. We optimize every digital touchpoint.",
      iconUrl: "/digital-marketing-icon.png",
    },
    {
      id: "02",
      title: "Social Media Management",
      description:
        "Build authentic brand connections through tailored content strategies, community engagement, and platform-specific best practices.",
      iconUrl: "/social-media-icon.png",
    },
    {
      id: "03",
      title: "Visual Storytelling",
      description:
        "Professional photography and videography services that capture your brand essence and communicate your unique value proposition.",
      iconUrl: "/photography-icon.png",
    },
  ];

  //framer effect 2nd section
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    },
  };

//3nd section framer animation
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  

  // Thumbnail images data
  const thumbnails = [
    { url: "/thumb.png", id: "thumb-1" },
    // { url: "/thumb-1.png", id: "thumb-2" },
    { url: "/thumb-2.png", id: "thumb-3" },
    { url: "/thumb-3.png", id: "thumb-4" },
    { url: "/designstudiohub.png", id: "thumb-5" },
    { url: "/edirisingha-homes.png", id: "thumb-6" },
    { url: "/hnr.png", id: "thumb-7" },
  ];

  return (
    <div className="relative w-full bg-everefficientlkwhite">
      {/* Hero Section */}
      <div className="relative">
        <OverlapSection />
        <HeaderSection />
      </div>

      {/* Service Cards Section */}
      <section className="py-16 bg-gray-50">
  <div className="container px-4 mx-auto">
    <motion.div
      className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3 perspective-1000"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {serviceCards.map((card) => (
        <motion.div key={card.id} variants={cardVariants}>
          <Card
            className="
              bg-everefficientlkwhite 
              rounded-[50px_50px_50px_0px] 
              overflow-hidden 
              border-[0.5px] border-zinc-400
              shadow-[0px_0px_40px_5px_#0000000d] 
              transition-transform duration-300 ease-in-out
              hover:shadow-[0px_0px_50px_10px_#0000001a]
              hover:-translate-y-2 hover:translate-x-1 
              hover:scale-[1.05]
              hover:shadow-lg
              will-change-transform
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            <CardContent className="relative h-full p-8">
              <div className="absolute text-5xl font-bold leading-none text-black select-none top-4 right-6">
                {card.id}
              </div>

              <div className="flex items-center justify-center w-20 h-20 bg-everefficientlkblack rounded-[40px] shadow-[5px_5px_0px_#f2f3f5] mb-6">
                <div
                  className="w-12 h-12 bg-center bg-cover"
                  style={{ backgroundImage: `url(${card.iconUrl})` }}
                />
              </div>

              <h3 className="mb-4 text-xl font-semibold text-everefficientlkmirage">
                {card.title}
              </h3>

              <p className="leading-relaxed text-zinc-700">
                {card.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25 " />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
  <div className="container px-4 mx-auto">
    <motion.div
      className="grid items-center grid-cols-1 gap-12 mx-auto lg:grid-cols-2 max-w-7xl"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Images Column */}
      <motion.div variants={fadeUpVariant} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div
            className="h-96 rounded-[80px_80px_0px_80px] bg-cover bg-center"
            style={{
              backgroundImage: "url(/digital-strategy-team-meeting.png)",
            }}
          />
          <div className="space-y-6">
            <div
              className="h-44 rounded-full border-2 border-dashed border-[#275ba8] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/presenting-digital-solutions-to-clients.png)",
              }}
            />
            <div
              className="h-44 rounded-[0px_80px_80px_80px] bg-cover bg-center"
              style={{
                backgroundImage: "url(/our-team-analyzing-data.png)",
              }}
            />
          </div>
        </div>

        <Card className="bg-everefficientlkcerulean-blue rounded-[50px_50px_50px_0px] p-6 shadow-[0px_0px_40px_5px_#0000001a]">
          <CardContent className="flex items-center gap-4 p-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-everefficientlkwhite">
              <div
                className="w-12 h-12 bg-center bg-cover"
                style={{ backgroundImage: "url(/analytics-icon.png)" }}
              />
            </div>
            <div className="text-everefficientlkwhite">
              <div className="text-lg font-bold">9+ Years Of</div>
              <div className="text-lg font-bold">Digital Excellence</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Content Column */}
      <motion.div
        variants={fadeUpVariant}
        className="px-4 space-y-10 md:px-8 lg:px-0"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              className="h-5 w-7"
              alt="Component"
              src="/component-1-66.svg"
            />
            <span className="text-base font-bold tracking-widest md:text-lg text-everefficientlkcerulean-blue">
              OUR STORY
            </span>
          </div>
          <div className="w-24 h-0.5 bg-everefficientlkcerulean-blue"></div>
        </div>

        <div>
          <h2 className="mb-6 text-[2.25rem] leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-everefficientlkmirage">Pioneering </span>
            <span className="text-everefficientlkcerulean-blue">
              Digital Transformation{" "}
            </span>
            <span className="block text-everefficientlkmirage sm:inline">
              Since 2015
            </span>
          </h2>

          <p className="max-w-3xl text-base leading-relaxed md:text-lg text-zinc-600">
            Ever Efficient emerged from a vision to bridge the gap between
            traditional business practices and the digital revolution. What
            began as a small consulting firm has grown into a full service
            digital management agency, helping hundreds of businesses achieve
            measurable success.
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center justify-start gap-6 md:flex-row">
            <Link to="/services">
              <Button className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] h-14 px-8 shadow-[0px_0px_40px_5px_#0000000d] transition-all duration-300">
                <span className="text-everefficientlkwhite text-sm tracking-[0.14px] leading-[25.2px]">
                  Our Services
                </span>
                <img
                  className="w-4 h-4 ml-2"
                  alt="Arrow"
                  src="/component-1-37.svg"
                />
              </Button>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-everefficientlkblack rounded-full shadow-[-5px_5px_0px_#116e6317]">
                <img
                  className="w-6 h-6"
                  alt="Phone"
                  src="/component-1-63.svg"
                />
              </div>
              <div>
                <div className="text-sm font-medium md:text-base text-everefficientlkcerulean-blue">
                  Get Free Consultation
                </div>
                <div className="text-base font-semibold md:text-lg text-everefficientlkblack">
                  +94 777 644 590
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />
      {/* Contact Section */}
      {/* <section className="px-12 py-6 bg-gray-50 ">
        <div className="container mx-auto px-">
          <div className="flex flex-col items-center justify-end gap-6 mx-auto md:flex-row max-w-7xl">
            <Button className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] h-14 px-8 shadow-[0px_0px_40px_5px_#0000000d] transition-all duration-300">
              <span className="text-everefficientlkwhite text-sm tracking-[0.14px] leading-[25.2px]">
                Our Services
              </span>
              <img
                className="w-4 h-4 ml-2"
                alt="Arrow"
                src="/component-1-37.svg"
              />
            </Button>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-everefficientlkblack rounded-full shadow-[-5px_5px_0px_#116e6317]">
                <img
                  className="w-6 h-6"
                  alt="Phone"
                  src="/component-1-63.svg"
                />
              </div>
              <div>
                <div className="text-base font-medium text-everefficientlkcerulean-blue">
                  Get Free Consultation
                </div>
                <div className="text-lg font-semibold text-everefficientlkblack">
                  +94 777 644 590
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Separator className="w-full h-px border-t border-[#757f95] opacity-25" /> */}
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />

      <DividerSection />

      {/* Contact Section */}
      {/* <section className="py-12 bg-gray-50 ">
        <div className="container mx-auto px-">
          <div className="flex flex-col items-center justify-end gap-6 mx-auto md:flex-row max-w-7xl">
            <Button className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] h-14 px-8 shadow-[0px_0px_40px_5px_#0000000d] transition-all duration-300">
              <span className="text-everefficientlkwhite text-sm tracking-[0.14px] leading-[25.2px]">
                Our Services
              </span>
              <img
                className="w-4 h-4 ml-2"
                alt="Arrow"
                src="/component-1-37.svg"
              />
            </Button>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-everefficientlkblack rounded-full shadow-[-5px_5px_0px_#116e6317]">
                <img
                  className="w-6 h-6"
                  alt="Phone"
                  src="/component-1-63.svg"
                />
              </div>
              <div>
                <div className="text-base font-medium text-everefficientlkcerulean-blue">
                  Get Free Consultation
                </div>
                <div className="text-lg font-semibold text-everefficientlkblack">
                  +94 777 644 590
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />

      <ContentSection />

      {/* Media Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
            {/* Full Image - No Cropping */}
            <div className="h-[324px] lg:h-[576px] w-full flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="/addv-jpg.png"
                alt="Advertisement"
                className="object-contain w-auto h-full"
              />
            </div>

            {/* Autoplay Video with Mute/Unmute */}
            <div className="h-[324px] lg:h-[576px] w-full relative rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-fit"
                src="/addv-video.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
              <Button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] px-6 py-3 transition-all duration-300"
              >
                <span className="font-semibold text-everefficientlkwhite">
                  {isMuted ? "🔇 UNMUTE" : "🔊 MUTE"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />

      {/* Thumbnails Section */}
      <section className="py-12 overflow-hidden bg-everefficientlkathens-gray">
        <div className="container px-4 mx-auto">
          <InfiniteSlider speedOnHover={16} gap={24}>
            {thumbnails.concat(thumbnails).map((thumb, index) => (
              <img
                key={index}
                src={thumb.url}
                alt={thumb.alt || `Thumbnail ${index + 1}`}
                className="aspect-[14/9] w-[140px] rounded-xl bg-white shadow-sm object-contain"
              />
            ))}
          </InfiniteSlider>
        </div>
      </section>
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />

      <MainContentSection />
      <OverlapGroupSection />

      {/* FAQ Section */}
      <section className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  className="w-6 h-5"
                  alt="Component"
                  src="/component-1-11.svg"
                />
                <span className="text-2xl font-bold tracking-widest text-everefficientlkcerulean-blue">
                  FAQ'S
                </span>
              </div>
              <div className="w-24 h-0.5 bg-everefficientlkcerulean-blue mx-auto mb-8"></div>

              <h2 className="text-5xl font-bold leading-tight">
                <span className="text-everefficientlkmirage">General </span>
                <span className="text-everefficientlkcerulean-blue">
                  Frequently
                  <br />
                </span>
                <span className="text-everefficientlkmirage">
                  Asked Questions
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {faqItems.map((faq) => (
                <Accordion
                  key={faq.id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={faq.id} className="border-none">
                    <Card className="bg-everefficientlkwhite rounded-[30px_30px_30px_0px] overflow-hidden shadow-[0px_0px_40px_5px_#0000000d] hover:shadow-[0px_0px_50px_10px_#0000001a] transition-all duration-300">
                      <AccordionTrigger className="px-6 py-6 hover:no-underline">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-everefficientlkblack">
                            <div className="text-xl font-bold text-everefficientlkwhite">
                              ?
                            </div>
                          </div>
                          <div className="text-lg leading-relaxed text-left text-everefficientlkmirage">
                            {faq.question}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="pl-16 text-lg leading-relaxed text-zinc-800">
                          {Array.isArray(faq.answer) ? (
                            <ul className="pl-4 space-y-1 list-disc">
                              {faq.answer.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{faq.answer}</p>
                          )}
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BackgroundSection />

      <FooterSection />

      {/* Chat buttons */}
      <div className="fixed z-50 flex gap-3 bottom-6 right-6">
        <Button className="w-14 h-14 p-0 flex items-center justify-center bg-[#0080ff] hover:bg-[#0066cc] rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <img className="w-8 h-8" alt="Chat" src="/component-6-10.svg" />
        </Button>
        <Button className="flex items-center justify-center p-0 transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-everefficientlkmalachite hover:bg-green-600 hover:scale-110">
          <img className="w-7 h-7" alt="WhatsApp" src="/component-6-11.svg" />
        </Button>
      </div>
    </div>
  );
};
