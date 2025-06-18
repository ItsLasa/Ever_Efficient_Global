import React from "react";
import { Button } from "../button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../navigation-menu";

// Navigation links data
const navigationLinks = [
  { text: "Home", url: "/" },
  { text: "Services", url: "/Services" },
  { text: "About Us", url: "/About"},
];

export const HeaderSection = (): JSX.Element => {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-60 h-14 bg-[url(/ever-efficient-logo.png)] bg-contain bg-no-repeat bg-left" />
          </div>

          {/* Navigation Links */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-8">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.url}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="text-everefficientlkwhite hover:text-everefficientlkcerulean-blue text-base font-medium transition-colors duration-300 py-2"
                  >
                    {link.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button */}
          <Button
            asChild
            className="bg-[#275ba8] hover:bg-[#1e4a8c] rounded-[50px_50px_50px_0px] shadow-[0px_0px_40px_5px_#0000000d] h-12 px-6 transition-all duration-300"
          >
            <a
              href="/Contact"
              // target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-everefficientlkwhite text-sm font-medium tracking-wide"
            >
              <img
                className="w-4 h-4"
                alt="Component"
                src="/component-1-38.svg"
              />
              <span>CONTACT US</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
