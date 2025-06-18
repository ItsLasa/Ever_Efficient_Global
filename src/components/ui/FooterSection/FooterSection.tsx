import {
  ChevronRightIcon,
  LinkedinIcon,
  LucideFacebook,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Card, CardContent } from "../card";
import { Button } from "../button";

// Data for quick links
const quickLinks = [
  { text: "Home", url: "https://everefficient.lk/index.html" },
  { text: "About Us", url: "https://everefficient.lk/about.html" },
  { text: "Services", url: "https://everefficient.lk/services.html" },
  { text: "Contact Us", url: "https://everefficient.lk/contact.html" },
  { text: "Privacy Policy", url: "https://everefficient.lk/privacy.html" },
];

// Data for contact information
const contactInfo = [
  {
    icon: <PhoneIcon className="w-4 h-4" />,
    text: "+94 777 644 590",
    url: null,
  },
  {
    icon: <MapPinIcon className="w-3 h-4" />,
    text: "No.15/I/C, 2nd Floor, Edirisinghe Tower,New Digana Road, Kundasale, Kandy",
    url: null,
  },
  {
    icon: <MailIcon className="w-4 h-4" />,
    text: "everefficient.official@gmail.com",
    url: "https://everefficient.lk/index.html",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-everefficientlkblack py-6 px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="flex flex-col space-y-4">
            <div className="w-[220px] h-[51.56px] bg-[url(/ever-efficient-logo-1.png)] bg-cover bg-[50%_50%]" />
            <p className="font-inter text-everefficientlkwhite text-[14.8px] leading-[28.8px] mt-4">
              Transform your business with cutting-edge digital strategies and
              efficient management solutions
            </p>

            {/* Contact Information */}
            <div className="flex flex-col gap-[14.4px] mt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-[15px]">
                  <div className="flex min-w-[30px] min-h-[30px] items-center justify-center p-[7px] bg-everefficientlkcerulean-blue rounded-[10px_10px_10px_0px]">
                    {item.icon}
                  </div>
                  {item.url ? (
                    <a
                      href={item.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-everefficient-lk-semantic-link text-everefficientlkalice-blue text-[length:var(--everefficient-lk-semantic-link-font-size)] leading-[var(--everefficient-lk-semantic-link-line-height)]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <div className="font-everefficient-lk-semantic-item text-everefficientlkalice-blue text-[length:var(--everefficient-lk-semantic-item-font-size)] leading-[var(--everefficient-lk-semantic-item-line-height)]">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <div className="relative pb-5">
              <h3 className="font-inter text-everefficientlkwhite text-[19.4px] leading-[21px]">
                Quick Links
              </h3>
              <div className="w-[90px] h-[3px] mt-4 bg-everefficientlkwhite-20" />
              <div className="w-[30px] h-[3px] mt-[-3px] ml-[18px] bg-everefficientlkcerulean-blue" />
            </div>

            <div className="flex flex-col gap-[10.4px] mt-4">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRightIcon className="w-2 h-4 text-everefficientlkwhite" />
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="ml-2 font-inter text-everefficientlkwhite text-base leading-[28.8px]"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col">
            <div className="relative pb-5">
              <h3 className="font-everefficient-lk-semantic-heading-4 text-everefficientlkwhite text-[length:var(--everefficient-lk-semantic-heading-4-font-size)] leading-[var(--everefficient-lk-semantic-heading-4-line-height)]">
                Newsletter
              </h3>
              <div className="w-[90px] h-[3px] mt-4 bg-everefficientlkwhite-20" />
              <div className="w-[30px] h-[3px] mt-[-3px] ml-[18px] bg-everefficientlkcerulean-blue" />
            </div>

            <p className="font-inter text-everefficientlkwhite text-[14.8px] leading-[28.8px] mt-4">
              Subscribe to our newsletter to get
              <br />
              the latest updates and news.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <Card className="bg-everefficientlkwhite rounded-xl overflow-hidden">
                <CardContent className="p-5">
                  <div className="font-everefficient-lk-semantic-input text-everefficientlkshark-75 text-[length:var(--everefficient-lk-semantic-input-font-size)]">
                    Your Email
                  </div>
                </CardContent>
              </Card>

              <Button className="relative h-[53.19px] bg-[#275ba8] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] text-everefficientlkwhite text-sm tracking-[1.00px] leading-[25.2px]">
                SUBSCRIBE NOW
                <ChevronRightIcon className="w-[15px] h-[15px] ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex items-center mt-16 pt-[11px] pb-2.5 border-t border-[#ffffff14]">
          <div className="flex items-center">
            <a
              className="font-everefficient-lk-inter-regular  text-everefficientlkcerulean-blue text-[length:var(--everefficient-lk-inter-regular-font-size)] leading-[28.8px]"
              href="https://everefficient.lk/privacy.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
            <span className="font-everefficient-lk-inter-regular text-everefficientlkalice-blue text-[length:var(--everefficient-lk-inter-regular-font-size)] leading-[28.8px] px-1">
              {" "}
              | Powered By EVER EFFICIANT Business Management (Pvt) Ltd
            </span>
          </div>

          <div className="flex justify-end gap-[15px] ml-auto">
            <div className="flex w-[38px] items-center justify-center bg-white rounded-[10px_10px_10px_0px]">
              <a
                href="https://www.linkedin.com/company/ever-efficient"
                rel="noopener noreferrer"
                target="_blank"
                className="text-everefficientlkcerulean-blue"
              >
                <LinkedinIcon className="w-6 h-10" />
              </a>
            </div>

            <div className="flex w-[38px] items-center justify-center bg-white rounded-[10px_10px_10px_0px]">
              <a
                href="https://wa.me/94707446334"
                rel="noopener noreferrer"
                target="_blank"
                className="text-everefficientlkcerulean-blue"
              >
                <LucideFacebook className="w-6 h-10" />
                <span className="font-everefficient-lk-font-awesome-5-brands-regular leading-[var(--everefficient-lk-font-awesome-5-brands-regular-line-height)]"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
