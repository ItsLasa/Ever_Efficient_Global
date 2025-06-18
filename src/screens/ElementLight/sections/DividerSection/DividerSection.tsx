import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DividerSection = (): JSX.Element => {
  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To empower businesses with innovative digital solutions that drive growth, efficiency, and sustainable success in the modern marketplace.",
      iconUrl: "/mission-icon.png",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To be the leading force in digital business transformation, setting industry standards for innovation and client success.",
      iconUrl: "/vision-icon.png",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Mission & Vision */}
          <div className="lg:col-span-2 space-y-16">
            {sections.map(({ id, title, content, iconUrl }) => (
              <div key={id} className="flex items-start gap-8">
                {/* 3D Styled Icon */}
                <div
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-everefficientlkcerulean-blue to-blue-500 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),_6px_6px_16px_rgba(0,0,0,0.2)] flex items-center justify-center"
                >
                  <div
                    className="w-14 h-14 bg-center bg-contain bg-no-repeat rounded-full"
                    style={{
                      backgroundImage: `url(${iconUrl})`,
                      boxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(1px)",
                    }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-everefficientlkmirage mb-3">
                    {title}
                  </h3>
                  <p className="text-everefficientlkslate-gray text-lg leading-relaxed max-w-prose">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div>
            <Card className="bg-everefficientlkgenoa-9 rounded-3xl p-10 relative shadow-xl">
              <CardContent className="p-0">
                <p className="text-everefficientlkmirage text-xl leading-relaxed italic font-normal tracking-wide">
                  "We don't just adapt to the digital age; we help businesses thrive
                  in it through strategic, results-driven solutions."
                </p>

                <img
                  className="absolute w-14 h-16 bottom-6 right-6 opacity-15 select-none pointer-events-none"
                  alt="Quote decoration"
                  src="/component-1-21.svg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
