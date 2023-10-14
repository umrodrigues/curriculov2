
import React from "react";
import styles from './Molecule.module.scss'
import { skillsNavigation } from "./mocks/skills-mock";



export const SkillsSection = () => {

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="pb-10 w-full lg:pb-32 bg-neutral-900 flex gap-10 flex-col">
        <div className="text-center w-full">
          <h2 className="text-lg font-semibold text-white">Sobre</h2>
          <p className="text-2xl font-bold text-white tracking-tight sm:text-4xl lg:text-5xl">
            Skills
          </p>
        </div>
      </div>

      <div className={styles.skillsWrapper}>
        <ul className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {skillsNavigation.map((item, index) => (
            <li
              key={index}
              className={`mb-2 text-primary-white flex items-center`}
              style={{
                transition: "transform 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.icon && (
                <div className="mr-2">
                  {React.createElement(item.icon, {
                    className: "text-4xl text-primary-white",
                  })}
                </div>
              )}
              <span className="mr-2">{item.label}</span>
              <div className="flex space-x-1">
              
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};