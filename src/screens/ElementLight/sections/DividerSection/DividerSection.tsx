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
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Mission & Vision */}
          <div className="space-y-16 lg:col-span-2">
            {sections.map(({ id, title, content, iconUrl }) => (
              <div key={id} className="flex items-start gap-8">
                {/* 3D Styled Icon */}
                <div
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-everefficientlkcerulean-blue to-blue-500 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),_6px_6px_16px_rgba(0,0,0,0.2)] flex items-center justify-center"
                >
                  <div
                    className="bg-center bg-no-repeat bg-contain rounded-full w-14 h-14"
                    style={{
                      backgroundImage: `url(${iconUrl})`,
                      boxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(1px)",
                    }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-3xl font-semibold text-everefficientlkmirage">
                    {title}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-600 text-everefficientlkslate-gray max-w-prose">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div>
            <Card className="relative p-10 shadow-xl bg-everefficientlkgenoa-9 rounded-3xl">
              <CardContent className="p-0">
                <p className="text-xl italic font-normal leading-loose tracking-wide text-everefficientlkmirage">
                  "We don't just adapt to the digital age we help businesses thrive
                  in it through strategic, results-driven solutions."
                </p>

                <img
                  className="absolute h-16 pointer-events-none select-none w-14 bottom-6 right-6 opacity-15"
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
