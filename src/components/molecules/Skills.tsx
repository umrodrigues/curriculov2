
import React, { useState, useEffect } from "react";
import styles from './Molecule.module.scss'
import { skillsNavigation } from "./mocks/skills-mock";

export const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      skillsNavigation.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    { title: "Backend", start: 0, end: 4, color: "from-blue-500 to-cyan-500" },
    { title: "Frontend", start: 4, end: 8, color: "from-purple-500 to-pink-500" },
    { title: "DevOps & DB", start: 8, end: 12, color: "from-green-500 to-emerald-500" },
    { title: "Automação & IA", start: 12, end: 16, color: "from-orange-500 to-red-500" },
    { title: "Qualidade & Testes", start: 16, end: 20, color: "from-indigo-500 to-blue-500" },
    { title: "Metodologias & Infra", start: 20, end: 24, color: "from-teal-500 to-green-500" }
  ];

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="pb-6 sm:pb-8 w-full lg:pb-16 bg-neutral-900 flex gap-4 sm:gap-6 flex-col">
        <div className="text-center w-full px-4">
          <h2 className="text-base sm:text-lg font-semibold text-degrade">Skills</h2>
          <p className="text-xl sm:text-2xl font-bold text-white tracking-tight lg:text-4xl xl:text-5xl">
            Tecnologias
          </p>
          <p className="text-gray-300 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Especialista em desenvolvimento fullstack com foco em backend, automação e soluções inteligentes
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 py-8 sm:py-12 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-4 sm:p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4`}>
                  {category.title}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {skillsNavigation.slice(category.start, category.end).map((item, index) => {
                    const globalIndex = category.start + index;
                    const isVisible = visibleSkills.includes(globalIndex);
                    
                    return (
                      <div
                        key={globalIndex}
                        className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {item.icon && (
                          <div className="flex-shrink-0">
                            {React.createElement(item.icon, {
                              className: "text-lg sm:text-xl lg:text-2xl text-white",
                            })}
                          </div>
                        )}
                        <span className="text-gray-200 text-xs sm:text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};