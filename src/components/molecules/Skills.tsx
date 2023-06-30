import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaJava, FaDocker, FaSass, FaDev,FaLaravel,FaNode, FaVuejs, FaCodeBranch,FaLinux, FaNetworkWired, FaMailBulk, FaJenkins } from "react-icons/fa";
import { SiTypescript, SiMysql, SiSpring, SiSass, SiPython, SiCsharp, SiPhp, SiRuby } from "react-icons/si";
import { useState } from "react";
import React from "react";



export const navigation = [
  {
    label: "Hooks customizados",
    icon: FaCodeBranch,
    level: 3,
  },
  {
    label: "Testes unitários com Jest",
    icon: FaCodeBranch,
    level: 3,

  },
  {
    label: "Documentação com storybook",
    icon: FaCodeBranch,
    level: 3,
  },
  {
    label: "Layout Responsivo",
    icon: FaCodeBranch,
    level: 3,

  },
  {
    label: "Sistemas Operacionais GNU/Linux",
    icon: FaLinux,
    level: 2,

  },

  {
    label: "Cake PHP",
    icon: FaLinux,
    level: 1,

  },
  {
    label: "Metodologias ágeis, Scrum, Kambam",
    icon: FaLinux,
    level: 3,

  },
  {
    label: "Conceitos de rede de computadores (TCP/IP, Switch, Roteador, Firewall, VPN)",
    icon: FaLinux,
    level: 2,

  },
  {
    label: "Laravel",
    icon: FaLaravel,
    level: 2,


  },
  {
    label: "Node.js",
    icon: FaNode,
    level: 3,


  },
  {
    label: "Vue.js",
    icon: FaVuejs,
    level: 3,


  },
  {
    label: "Configuração de placas e rotas de rede",
    icon: FaNetworkWired,
    level: 2,

  },
  {
    label: "Servidor SSH",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Servidor Web ( Apache e Nginx)",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Arquiteturas de Hardware de computadores ( SCSI, RAID, HBA )",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Servidor de e-mail ( Postfix / Qmail ou Sendmail )",
    icon: FaMailBulk,
    level: 2,

  },
  {
    label: "Instalação de pacotes ( .rpm / .deb )",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Shell Script",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Editores de texto ( vi / vim / emacs / mcedit )",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Agendamento de tarefas ( cron / at )",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Kubernets",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Jenkins",
    icon: FaJenkins,
    level: 3,

  },
  {
    label: "Inglês",
    icon: FaCodeBranch,
    level: 3,

  },
  {
    label: "Postmann e Insomnia",
    icon: FaCodeBranch,
    level: 3,

  },
  {
    label: "RabbitMq",
    icon: FaCodeBranch,
    level: 3,

  },
  {
    label: "Graphana",
    icon: FaCodeBranch,
    level: 2,

  },
  {
    label: "Swagger",
    icon: FaCodeBranch,
    level: 3,

  },

  {
    label: "HTML5",
    icon: FaHtml5,
    level: 3,

  },
  {
    label: "CSS3",
    icon: FaCss3Alt,
    level: 3,

  },
  {
    label: "JavaScript",
    icon: FaJs,
    level: 3,

  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    level: 3,

  },
  {
    label: "React",
    icon: FaReact,
    level: 3,

  },
  {
    label: "MySQL",
    icon: SiMysql,
    level: 3,

  },
  {
    label: "Java",
    icon: FaJava,
    level: 3,

  },
  {
    label: "Spring",
    icon: SiSpring,
    level: 3,

  },
  {
    label: "Docker",
    icon: FaDocker,
    level: 3,

  },
  {
    label: "Sass",
    icon: FaSass,
    level: 3,

  },
  {
    label: "Python",
    icon: SiPython,
    level: 2,

  },
  {
    label: "C#",
    icon: SiCsharp,
    level: 2,

  },
  {
    label: "PHP",
    icon: SiPhp,
    level: 2,

  },
];

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

      <div className="flex justify-center py-8">
        <ul className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {navigation.map((item, index) => (
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
                {Array.from({ length: item.level }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-lg ${
                      i === 0 ? "bg-red-500" : i === 1 ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};