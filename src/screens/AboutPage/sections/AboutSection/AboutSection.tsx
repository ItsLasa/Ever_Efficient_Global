import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { DividerSection } from '../../../ElementLight/sections/DividerSection';
import { Separator } from '@radix-ui/react-separator';
import SpiderWeb from '../../../../components/ui/SpiderWeb';

export const AboutSection = (): JSX.Element => {

  const features = [
    {
      icon: '🛡️',
      number: '1',
      title: 'Integrity',
      description:
        'We maintain the highest standards of honesty and transparency in all our dealings.',
    },
    {
      icon: '💡',
      number: '2',
      title: 'Innovation',
      description:
        'We constantly evolve and adapt to bring the latest solutions to our clients.',
    },
    {
      icon: '🫱🏻‍🫲🏽',
      number: '3',
      title: 'Collaboration',
      description:
        'We believe in working together to achieve exceptional results.',
    },
    {
      icon: '📈',
      number: '4',
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do.',
    },
  ];

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
            About Us
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
              About Us
            </span>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 mx-auto lg:grid-cols-2 max-w-7xl">
            <div className="space-y-6">
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
                    style={{ backgroundImage: "url(/our-team-analyzing-data.png)" }}
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
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    className="h-5 w-7"
                    alt="Component"
                    src="/component-1-66.svg"
                  />
                  <span className="text-lg font-bold tracking-widest text-everefficientlkcerulean-blue">
                    OUR STORY
                  </span>
                </div>
                <div className="w-32 h-0.5 bg-everefficientlkcerulean-blue"></div>
              </div>
              <div>
                <h2 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                  <span className="text-everefficientlkmirage">Pioneering </span>
                  <span className="text-everefficientlkcerulean-blue">
                    Digital
                    <br />
                    Transformation
                  </span>
                  <span className="text-everefficientlkmirage">
                    {" "}
                    Since
                    <br />
                    2015
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-zinc-600">
                  Ever Efficient emerged from a vision to bridge the gap between traditional
                  business practices and the digital revolution. What began as a small
                  consulting firm has grown into a full service digital management agency,
                  helping hundreds of businesses achieve measurable success.
                </p>
              </div>
              <div className="">
                <div className="flex flex-col items-center justify-start gap-6 mx-auto md:flex-row max-w-7xl">
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
            </div>
          </div>
        </div>
      </section>
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />
      <Separator className="w-full h-px border-t border-[#757f95] opacity-25" />
      <DividerSection />
      <section
        className="relative py-12 px-6 md:px-12 text-center text-white min-h-[350px] bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('./aboutus_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/5 p-4 rounded-xl"
            >
              <div
                className="text-7xl mb-4 inline-block transform transition-all duration-500 
                     group-hover:scale-125 
                     group-hover:rotate-6 
                     group-hover:text-yellow-300 
                     group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] 
                     group-hover:animate-bounce"
              >
                {item.icon}
              </div>
              <div className="text-5xl font-bold transition-all duration-300 group-hover:text-yellow-200">
                {item.number}
              </div>
              <h3 className="mt-2 text-2xl font-semibold ">
                {item.title}
              </h3>
              <p className="mt-1 text-lg transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col w-full items-center py-[30px] bg-everefficientlkprussian-blue-85 bg-[url(..//background.png)] bg-cover bg-center">
        <div className="relative max-w-[1200px] w-full h-auto py-10">

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
          <div className="flex justify-center gap-[22px] w-full py-1.5">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-[274.5px] h-[280.98px] bg-everefficientlkwhite rounded-[40px_40px_40px_0px] border-b-[5px] border-[#275ba8] relative"
              >
                <CardContent className="p-0">

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

                  <div className="absolute top-0 right-[30px] flex flex-col w-10 h-10 items-start pl-[6.88px] pr-[6.87px] pt-px pb-2 bg-everefficientlkcerulean-blue rounded-[50px_50px_50px_0px]">
                    <img
                      className="w-[26.25px] h-[31px]"
                      alt="Quote icon"
                      src="/component-1-21.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};