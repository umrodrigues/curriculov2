import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaJava, FaDocker, FaSass } from "react-icons/fa";
import { SiTypescript, SiMysql, SiSpring, SiSass, SiPython, SiCsharp, SiPhp, SiRuby } from "react-icons/si";
import { useState } from "react";
import React from "react";

export const navigation = [
  {
    label: "Hooks customizados",
  },
  {
    label: "Testes unitários com Jest",
  },
  {
    label: "Documentação com storybook",
  },
  {
    label: "Layout Responsivo",
  },
  {
    label: "Sistemas Operacionais GNU/Linux",
  },
  {
    label: "Bancos de dados SQL, NOSQL( Mysql , PostgreSQL, Oracle, MongoDB)",
  },
  {
    label: "Cake PHP",
  },
  {
    label: "Metodologias ágeis, Scrum, Kambam",
  },
  {
    label: "Conceitos de rede de computadores (TCP/IP, Switch, Roteador, Firewall, VPN)",
  },
  {
    label: "Configuração de placas e rotas de rede",
  },
  {
    label: "Servidor SSH",
  },
  {
    label: "Servidor Web ( Apache e Nginx)",
  },
  {
    label: "Arquiteturas de Hardware de computadores ( SCSI, RAID, HBA )",
  },
  {
    label: "Servidor de e-mail ( Postfix / Qmail ou Sendmail )",
  },
  {
    label: "Instalação de pacotes ( .rpm / .deb )",
  },
  {
    label: "Shell Script",
  },
  {
    label: "Editores de texto ( vi / vim / emacs / mcedit )",
  },
  {
    label: "Agendamento de tarefas ( cron / at )",
  },
  {
    label: "Kubernets",
  },
  {
    label: "Jenkins",
  },
  {
    label: "Inglês Avançado",
  },
  {
    label: "Postmann e Insomnia",
  },
  {
    label: "RabbitMq",
  },
  {
    label: "Graphana",
  },
  {
    label: "Swagger",
  },

  {
    label: "HTML5",
    icon: FaHtml5,
  },
  {
    label: "CSS3",
    icon: FaCss3Alt,
  },
  {
    label: "JavaScript",
    icon: FaJs,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "Java",
    icon: FaJava,
  },
  {
    label: "Spring",
    icon: SiSpring,
  },
  {
    label: "Docker",
    icon: FaDocker,
  },
  {
    label: "Sass",
    icon: FaSass,
  },
  {
    label: "Python",
    icon: SiPython,
  },
  {
    label: "C#",
    icon: SiCsharp,
  },
  {
    label: "PHP",
    icon: SiPhp,
  },
];

export const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        <ul className="list-disc text-white">
          {navigation.map((item, index) => (
            <li key={index} className="mb-2 text-primary-orange">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center py-8 ">
        {navigation.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const iconColor = isHovered ? "text-primary-orange" : "text-primary-orange";
          return (
            <div key={index} className="mx-4 my-2">
              {item.icon && React.createElement(item.icon, {
                className: `text-4xl ${iconColor}`,
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
