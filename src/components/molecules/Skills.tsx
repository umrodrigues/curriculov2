
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
    { title: "Backend", start: 0, end: 5, color: "from-blue-500 to-cyan-500" },
    { title: "Frontend", start: 5, end: 9, color: "from-purple-500 to-pink-500" },
    { title: "DevOps & DB", start: 9, end: 12, color: "from-green-500 to-emerald-500" },
    { title: "Automação & IA", start: 12, end: 15, color: "from-orange-500 to-red-500" },
    { title: "Qualidade", start: 15, end: 18, color: "from-indigo-500 to-blue-500" },
    { title: "Metodologias", start: 18, end: 21, color: "from-teal-500 to-green-500" },
    { title: "Infraestrutura", start: 21, end: 28, color: "from-gray-500 to-slate-500" }
  ];

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="pb-10 w-full lg:pb-32 bg-neutral-900 flex gap-10 flex-col">
        <div className="text-center w-full">
          <h2 className="text-lg font-semibold text-degrade">Sobre</h2>
          <p className="text-2xl font-bold text-white tracking-tight sm:text-4xl lg:text-5xl">
            Skills & Tecnologias
          </p>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Especialista em desenvolvimento fullstack com foco em backend, automação e soluções inteligentes
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                  {category.title}
                </div>
                <div className="space-y-3">
                  {skillsNavigation.slice(category.start, category.end).map((item, index) => {
                    const globalIndex = category.start + index;
                    const isVisible = visibleSkills.includes(globalIndex);
                    
                    return (
                      <div
                        key={globalIndex}
                        className={`flex items-center space-x-3 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {item.icon && (
                          <div className="flex-shrink-0">
                            {React.createElement(item.icon, {
                              className: "text-2xl text-white",
                            })}
                          </div>
                        )}
                        <span className="text-gray-200 text-sm font-medium">
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