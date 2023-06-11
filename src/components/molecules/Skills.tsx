import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaJava, FaDocker, FaSass } from "react-icons/fa";
import { SiTypescript, SiMysql, SiSpring, SiSass, SiPython, SiCsharp, SiPhp, SiRuby } from "react-icons/si";
import { useState } from "react";
import React from "react";

export const navigation = {
  social: [
    {
      icon: FaHtml5,
    },
    {
      icon: FaCss3Alt,
    },
    {
      icon: FaJs,
    },
    {
      icon: SiTypescript,
    },
    {
      icon: FaReact,
    },
    {
      icon: SiMysql,
    },
    {
      icon: FaJava,
    },
    {
      icon: SiSpring,
    },
    {
      icon: FaDocker,
    },
    {
      icon: FaSass,
    },
    {
      icon: SiPython,
    },
    {
      icon: SiCsharp,
    },
    {
      icon: SiPhp,
    },
  ],
};

export const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className="glass w-full flex flex-col overflow-hidden">
      <div className="pb-10 w-full lg:pb-32 bg-neutral-900 flex gap-10 flex-col">
        <div className="text-center w-full">
          <h2 className="text-lg font-semibold text-white">Sobre</h2>
          <p className="text-2xl font-bold text-white tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </p>
        </div>
      </div>
      <div className="flex justify-center py-8">
        {navigation.social.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const iconColor = isHovered ? "text-primary-orange" : "text-white";
          return (
            <div
              key={index}
              className="mx-4"
            >
              {React.createElement(item.icon, { className: `text-4xl ${iconColor}` })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
