import React, { useState } from "react";
import { Button } from "../button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../navigation-menu";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { text: "Home", url: "/" },
  { text: "Services", url: "/Services" },
  { text: "About Us", url: "/About" },
];

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-black/80 backdrop-blur-sm border-white/10">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-52 h-12 bg-[url(/ever-efficient-logo.png)] bg-contain bg-no-repeat bg-left" />
          </a>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-8">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.url}
                    rel="noopener noreferrer"
                    className="py-2 text-base font-medium text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-md h-12 px-6 transition-all duration-300"
            >
              <a
                href="/Contact"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium tracking-wide text-white"
              >
                <img
                  className="w-4 h-4"
                  alt="Contact Icon"
                  src="/component-1-38.svg"
                />
                <span>CONTACT US</span>
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            <div className="flex flex-col items-start gap-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block w-full font-medium text-white transition hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <Button
                asChild
                className="w-full bg-[#275ba8] hover:bg-[#1e4a8c] rounded-md h-11 text-sm font-medium text-white"
              >
                <a href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
