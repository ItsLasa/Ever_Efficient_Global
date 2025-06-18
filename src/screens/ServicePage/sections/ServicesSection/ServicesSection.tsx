import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import SpiderWeb from "../../../../components/ui/SpiderWeb";

// Service data for mapping
const services = [
  {
    id: 1,
    category: "DIGITAL SOLUTIONS",
    title: "Strategic Digital Marketing",
    description:
      "Comprehensive digital marketing solutions to boost your online presence and drive measurable results. Our data-driven approach ensures maximum ROI for your marketing investments.",
    features: [
      {
        icon: "/component-1-2-12.svg",
        title: "Search Engine Optimization (SEO):",
        description: "Improve visibility and organic rankings",
      },
      {
        icon: "/component-1-2-19.svg",
        title: "Pay-Per-Click Advertising:",
        description: "Targeted campaigns on Google and social media",
      },
      {
        icon: "/component-1-2-16.svg",
        title: "Email Marketing:",
        description: "Nurture leads with automated sequences",
      },
      {
        icon: "/component-1-2-23.svg",
        title: "Analytics & Reporting:",
        description: "Transparent performance tracking",
      },
    ],
    ctaText: "Get Marketing Audit",
    ctaLink: "https://everefficient.lk/services.html",
    iconPrefix: "/component-1-2-37.svg",
    image: "/digital-marketing-strategy-session.png",
    hasBg: false,
  },
  {
    id: 2,
    category: "ONLINE PRESENCE",
    title: "Professional Social Media Management",
    description:
      "We build authentic brand connections through strategic social media management that engages your audience and grows your community.",
    features: [
      {
        icon: "/component-1-2-28.svg",
        title: "Strategy Development:",
        description: "Platform-specific roadmaps",
      },
      {
        icon: "/component-1-2-18.svg",
        title: "Content Creation:",
        description: "Engaging posts and visuals",
      },
      {
        icon: "/component-1-2-33.svg",
        title: "Community Management:",
        description: "Daily engagement",
      },
      {
        icon: "/component-1-2-24.svg",
        title: "Performance Analysis:",
        description: "Continuous optimization",
      },
    ],
    ctaText: "View Our Portfolio",
    ctaLink: "#",
    iconPrefix: "#",
    image: "/social-media-content-creation.png",
    hasBg: true,
  },
  {
    id: 3,
    category: "VISUAL STORYTELLING",
    title: "Professional Photography & Videography",
    description:
      "High-quality visual content that captures your brand essence and communicates your unique value proposition across all platforms.",
    features: [
      {
        icon: "/component-1-2-39.svg",
        title: "Product Photography:",
        description: "Showcase your offerings",
      },
      {
        icon: "/component-1-2-21.svg",
        title: "Brand Videos:",
        description: "Tell your company story",
      },
      {
        icon: "/component-1-2-30.svg",
        title: "Event Coverage:",
        description: "Professional documentation",
      },
      {
        icon: "/component-1-2-34.svg",
        title: "Post-Production:",
        description: "Expert editing services",
      },
    ],
    ctaText: "View Our Gallery",
    ctaLink: "#",
    iconPrefix: "/component-1-2-26.svg",
    image: "/professional-photography-session.png",
    hasBg: false,
  },
  {
    id: 4,
    category: "DIGITAL PRESENCE",
    title: "Custom Web Development",
    description:
      "Results-driven websites that combine stunning design with seamless functionality to convert visitors into customers.",
    features: [
      {
        icon: "/component-1-2-25.svg",
        title: "Custom Website Design:",
        description: "Unique brand-aligned designs",
      },
      {
        icon: "/component-1-2-35.svg",
        title: "E-commerce Solutions:",
        description: "Secure online stores",
      },
      {
        icon: "/component-1-2-38.svg",
        title: "Mobile Optimization:",
        description: "Flawless mobile experience",
      },
      {
        icon: "/component-1-2-27.svg",
        title: "Maintenance & Support:",
        description: "Ongoing technical care",
      },
    ],
    ctaText: "Request A Quote",
    ctaLink: "#",
    iconPrefix: "/component-1-2-36.svg",
    image: "/web-development-process.png",
    hasBg: true,
  },
  {
    id: 5,
    category: "STRATEGIC GROWTH",
    title: "Business Consulting Services",
    description:
      "Expert guidance to optimize your operations, streamline processes, and position your business for sustainable growth in the digital age.",
    features: [
      {
        icon: "/component-1-2-1.svg",
        title: "Business Analysis:",
        description: "Comprehensive operational review",
      },
      {
        icon: "/component-1-2-2.svg",
        title: "Process Optimization:",
        description: "Efficiency improvements",
      },
      {
        icon: "/component-1-2.svg",
        title: "Strategic Planning:",
        description: "Long-term roadmap",
      },
      {
        icon: "/component-1-2-4.svg",
        title: "Team Training:",
        description: "Digital skills development",
      },
    ],
    ctaText: "Schedule Consultation",
    ctaLink: "#",
    iconPrefix: "/component-1-2-32.svg",
    image: "/business-consulting-meeting.png",
    hasBg: false,
  },
];

export const ServicesSection = (): JSX.Element => {
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
            Services
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
              Services
            </span>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`w-full flex justify-center py-[30px] ${service.hasBg ? "bg-everefficientlkathens-gray" : ""}`}
        >
          <div className="max-w-[1200px] w-full">
            <div className="flex flex-wrap items-center">
              {/* Left Content */}
              <div className="flex-1 px-3">
                <div className="relative w-full">
                  {/* Category and Title */}
                  <div className="flex flex-col items-start gap-[15.39px] pt-[7px]">
                    <div className="relative h-5   border-b-2 border-[#275ba8] font-bold flex items-center">
                      {service.iconPrefix === "#" ? (
                        <div className="w-[22px]  h-[21px] text-everefficientlkcerulean-blue font-everefficient-lk-font-awesome-5-free-solid-upper">
                          <span className="text-xl "></span>
                        </div>
                      ) : (
                        <img
                          className="w-6 h-[21px]"
                          alt="Category icon"
                          src={service.iconPrefix}
                        />
                      )}
                      <div className="ml-1 text-xl  font-everefficient-lk-inter-bold-upper text-everefficientlkcerulean-blue tracking-[4px] whitespace-nowrap">
                        {service.category}
                      </div>
                    </div>

                    <div className="w-full">
                      <h2 className="font-['Inter',Helvetica] font-bold text-transparent text-[49px] leading-[55px]">
                        <span className="text-[#19232b]">
                          {service.title.split(" ").slice(0, 1).join(" ")}{" "}
                        </span>
                        <span className="text-[#275ba8]">
                          {service.title
                            .split(" ")
                            .slice(1)
                            .join(" ")
                            .replace(" ", "\n")}
                        </span>
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="py-3">
                    <p className=" font-sans   text-everefficientlkslate-gray text-lg leading-[26px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mt-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="relative w-full flex items-start"
                      >
                        <div className="ml-[30px] mt-1">
                          <img
                            className="w-4 h-4"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <div className="ml-4 font-sans font-normal text-everefficientlkslate-gray text-[14.8px] leading-[28.8px]">
                          <span className="font-bold text-[#757f95]">
                            {feature.title}
                          </span>
                          <span className="text-[#757f95] ml-1">
                            {feature.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Button
                      className="h-[53px] bg-[#275ba8] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] hover:bg-[#1e4a8a]"
                      asChild
                    >
                      <a
                        href={service.ctaLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center"
                      >
                        <span className="font-everefficient-lk-inter-semi-bold-upper text-everefficientlkwhite text-sm tracking-[1px]">
                          {service.ctaText}
                        </span>
                        <ArrowRightIcon className="ml-2 w-[15px] h-[15px]" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 pl-[42px] pr-3">
                <div className="relative w-full">
                  <div className="absolute w-[546px] h-[364px] top-0 left-0 bg-everefficientlkblack rounded-[50px_50px_50px_0px] rotate-[-8deg]" />
                  <div
                    className="relative max-w-[546px] w-full h-[364px] rounded-[100px_100px_100px_0px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
